import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import PageTitle from "../shared/PageTitle";

function Dashboard() {
    return <>
    <PageTitle title="Dashboard" />
        {/* Scrollable Area: Sidebars + Main */}
        <div className="flex flex-1 overflow-hidden">

            {/* Left Sidebar */}
            <aside className="w-64 bg-gray-200-- p-4 shrink-0 overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Workflow</h2>
                <ul className="space-y-2">
                    <NavLink to="/dashboard/users" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>Users</NavLink>
                    <NavLink to="/dashboard/invoice" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>Invoices</NavLink>
                    <NavLink to="/dashboard/tasks" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>Tasks</NavLink>
                    <NavLink to="/dashboard/reports" className={({ isActive }) => `block hover:bg-gray-300 px-2 py-1 rounded ${isActive ? 'bg-gray-300 font-semibold' : ''}`}>Reports</NavLink>
                </ul>
            </aside>
            <Outlet />
        </div>
    </>
}

export default Dashboard;