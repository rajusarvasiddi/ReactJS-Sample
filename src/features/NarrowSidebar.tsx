import React, { Suspense } from 'react';

import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import SidebarNavLink from '../shared/SideNavLink';
import PageTitle from '../shared/PageTitle';

const Calendar = React.lazy(() => import("./Calendar"));
const Tasks = React.lazy(() => import("./Tasks"));
const Users = React.lazy(() => import("./Users/Users"));
const Inventory = React.lazy(() => import("./Inventory"));
const Invoices = React.lazy(() => import("./Invoices"));
const InvoiceDetails = React.lazy(() => import("./InvoiceDetails"));
const Reports = React.lazy(() => import("./Reports"));

function NarrowSidebar() {
    return <>
        <aside className="w-[50px] bg-gray-800 text-white flex flex-col shrink-0">
            {/* Scrollable icons A–Z */}
            <div className="flex-1 overflow-hidden relative">
                <div id="sidebar-items" className="flex flex-col items-center overflow-y-auto pr-1 h-full pt-0">
                    <SidebarNavLink to="/dashboard" label="D" tooltip="Dashboard" />
                    <SidebarNavLink to="/calendar" label="C" tooltip="Calendar" />
                    <SidebarNavLink to="/inventory" label="I" tooltip="Inventory" />
                </div>
            </div>
        </aside>
        <Outlet />

        <Suspense fallback={<div>loading...</div>}>
            <Routes>
            <Route path="/" element={ <Calendar /> } />
            <Route path="/dashboard" element={ <Dashboard /> }>
                {/* 2nd Level Navigation Routes */}
                <Route path="/dashboard" element={ <Users /> } />
                <Route path="users" element={ <Users /> } />
                <Route path="invoice" element={ <><PageTitle title='Invoices' /> <Invoices /></> }>
                    <Route path=":invoiceId" element={ <InvoiceDetails /> } />
                </Route>
                <Route path="tasks" element={ <Tasks /> } />
                <Route path="reports" element={ <Reports /> } />
            </Route>
            <Route path="/calendar" element={ <Calendar /> } />
            <Route path="/inventory" element={ <Inventory /> } />
            </Routes>
        </Suspense>
    </>
}

export default NarrowSidebar;
