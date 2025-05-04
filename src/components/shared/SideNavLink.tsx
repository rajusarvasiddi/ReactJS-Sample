import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';

interface SidebarNavLinkProps {
  to: string;
  label: string;
  matchPaths?: string[]; // Add this to support alias paths like "/"
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, label, matchPaths = [] }) => {
  const location = useLocation();
  const isActive = matchPaths.includes(location.pathname) || location.pathname === to;

  return (
    <NavLink
      to={to}
      className={() =>
        `p-2 w-full text-center font-medium border-l-2 transition-colors duration-200 ${
          isActive
            ? 'bg-white border-gray-400 text-black'
            : 'hover:bg-gray-700 border-transparent hover:border-gray-400 text-gray-300'
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default SidebarNavLink;
