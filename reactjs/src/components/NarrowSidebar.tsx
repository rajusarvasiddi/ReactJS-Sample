import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import SidebarNavLink from './shared/SideNavLink';
import Users from './Users';
import Reports from './Reports';
import Tasks from './Tasks';
import Inventory from './Inventory';
import InvoiceDetails from './InvoiceDetails';
import Invoices from './Invoices';

function NarrowSidebar() {
    return <>
        <aside className="w-[50px] bg-gray-800 text-white flex flex-col shrink-0">
            {/* Scrollable icons A–Z */}
            <div className="flex-1 overflow-hidden relative">
                <div id="sidebar-items" className="flex flex-col items-center overflow-y-auto pr-1 h-full pt-0">
                    <SidebarNavLink to="/dashboard" label="W" />
                    <SidebarNavLink to="/calendar" label="C" />
                    <SidebarNavLink to="/inventory" label="I" />
                    {/* <SidebarNavLink to="/dashboard" label="W" matchPaths={['/', '/dashboard']} /> */}
                </div>
            </div>
        </aside>
        <Outlet />


        <Routes>
          <Route path="/" element={ <Calendar /> } />
          <Route path="/dashboard" element={ <Dashboard /> }>
            {/* 2nd Level Navigation Routes */}
            <Route path="/dashboard" element={ <Users /> } />
            <Route path="users" element={ <Users /> } />
            <Route path="invoice" element={ <Invoices /> }>
                <Route path=":invoiceId" element={ <InvoiceDetails /> } />
            </Route>
            <Route path="tasks" element={ <Tasks /> } />
            <Route path="reports" element={ <Reports /> } />
          </Route>
          <Route path="/calendar" element={ <Calendar /> } />
          <Route path="/inventory" element={ <Inventory /> } />
        </Routes>

    </>
}

export default NarrowSidebar;
