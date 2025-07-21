import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Onboard: React.FC = () => (
    <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-200-- p-4 shrink-0 overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Onboard</h2>
            <ul className="space-y-2">
                <NavLink to="company" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>Company</NavLink>
                <NavLink to="user" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>User</NavLink>
            </ul>
        </aside>
        <Outlet />
    </div>
);

export default Onboard;
