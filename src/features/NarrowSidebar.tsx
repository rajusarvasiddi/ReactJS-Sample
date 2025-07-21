import React, { Suspense } from 'react';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import SidebarNavLink from '../shared/SideNavLink';
import PageTitle from '../shared/PageTitle';
import Overview from './Overview';
import NetworkStatus from '../Components/NetworkStatus';
import { NetworkProvider } from '../Components/NetworkContext';
import Onboard from './Onboard/Onboard';
import CreateCompany from './Onboard/Company';
import ProductForm from './Catalogue';

const Calendar = React.lazy(() => import("./Calendar"));
const Tasks = React.lazy(() => import("./Tasks"));
const Users = React.lazy(() => import("./Users/Users"));
const Inventory = React.lazy(() => import("./Inventory"));
const Invoices = React.lazy(() => import("./Invoices"));
const InvoiceDetails = React.lazy(() => import("./InvoiceDetails"));
const Reports = React.lazy(() => import("./Reports"));

function NarrowSidebar() {
    return (
        <>
            <aside className="w-[50px] bg-gray-800 text-white flex flex-col shrink-0">
                {/* Scrollable icons A–Z */}
                <div className="flex-1 overflow-hidden relative">
                    <div
                        id="sidebar-items"
                        className="flex flex-col items-center overflow-y-auto pr-1 h-full pt-0"
                    >
                        <SidebarNavLink to="/dashboard" label="D" tooltip="Dashboard" />
                        <SidebarNavLink to="/calendar" label="C" tooltip="Calendar" />
                        <SidebarNavLink to="/inventory" label="I" tooltip="Inventory" />
                        <SidebarNavLink to='/onboard' label='O' tooltip="Onboard" />
                    </div>
                </div>
            </aside>
            <Outlet />
            <NetworkProvider>
                <NetworkStatus />
                <Suspense fallback={<div>loading...</div>}>
                    <Routes>
                        {/* <Route path="/" element={<Overview />} /> */}
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />

                        <Route path="/dashboard" element={<Dashboard />}>
                            {/* 2nd Level Navigation Routes */}
                            {/* <Route path="/dashboard/overview" element={<Dashboard />} /> */}
                            <Route index element={<Navigate to="overview" replace />} />

                            <Route path="users" element={<Users />} />
                            <Route path="overview" element={<Overview />} />
                            <Route
                                path="invoice"
                                element={
                                    <>
                                        <PageTitle title="Invoices" /> <Invoices />
                                    </>
                                }
                            >
                                <Route path=":invoiceId" element={<InvoiceDetails />} />
                            </Route>
                            <Route path='products' element={<ProductForm />} />
                            <Route path="tasks" element={<Tasks />} />
                            <Route path="reports" element={<Reports />} />
                        </Route>
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/onboard" element={ <Onboard /> } >
                    <Route path="company" element={ <><PageTitle title='Company' /> <CreateCompany /></> } />
                    <Route path="user" element={ <><PageTitle title='User' /> <Inventory /></> } />
                </Route>
                    </Routes>
                </Suspense>
            </NetworkProvider>
        </>
    );
}

export default NarrowSidebar;
