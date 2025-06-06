import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';

import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface SidebarNavLinkProps {
  to: string;
  label: string;
  tooltip: string;
  matchPaths?: string[]; // Add this to support alias paths like "/"
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, label, tooltip, matchPaths = [] }) => {
  const location = useLocation();
  const isActive = matchPaths.includes(location.pathname) || location.pathname === to;

  return (
    <>
      <NavLink
        to={to}
        className={() =>
          `w-full text-center font-medium transition-colors duration-100 ${
            isActive
              ? 'bg-white border-gray-400 text-black'
              : 'hover:bg-gray-700 border-transparent hover:border-gray-400 text-gray-300'
          }`
        }
      >
      <Tooltip title={tooltip}>
          <button className="w-full bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition">
              {label}
              {/* <InfoIcon className="text-white" /> */}
          </button>
      </Tooltip>
      </NavLink>
    </>
  );
};

export default SidebarNavLink;
