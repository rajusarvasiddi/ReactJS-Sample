import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return <>
        {/* Scrollable Area: Sidebars + Main */}
        <div className="flex flex-1 overflow-hidden">

            {/* Left Sidebar */}
            <aside className="w-64 bg-gray-200 p-4 shrink-0 overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Workflow</h2>
                <ul className="space-y-2">
                    <Link to="/dashboard/users" className="block hover:bg-gray-300 px-2 py-1 rounded">Users</Link>
                    <Link to="/dashboard/invoice" className="block hover:bg-gray-300 px-2 py-1 rounded">Invoices</Link>
                    <Link to="/dashboard/tasks" className="block hover:bg-gray-300 px-2 py-1 rounded">Tasks</Link>
                    <Link to="/dashboard/reports" className="block hover:bg-gray-300 px-2 py-1 rounded">Reports</Link>
                </ul>
            </aside>

            <Outlet />  
            {/* Central Content */}
            
            {/* <Outlet /> */}
            {/* <Users /> */}

            {/* Right Sidebar */}
            {/* <aside className="w-64 bg-gray-100 p-4 shrink-0 overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Right Sidebar</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="block hover:bg-gray-200 px-2 py-1 rounded">Link A</a></li>
                    <li><a href="#" className="block hover:bg-gray-200 px-2 py-1 rounded">Link B</a></li>
                    <li><a href="#" className="block hover:bg-gray-200 px-2 py-1 rounded">Link C</a></li>
                    <li><a href="#" className="block hover:bg-gray-200 px-2 py-1 rounded">Link D</a></li>
                </ul>
            </aside> */}
        </div>
          
        {/* <Routes>
          <Route path="/dashboard/workflow" element={ <WorkFlow /> } />
        </Routes> */}
    </>
}

export default Dashboard;