import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import PageTitle from '../shared/PageTitle';
import React, { Suspense, useState } from 'react';
const CreateUser = React.lazy(() => import("./CreateUser"));

function Users() {
    const [showForm, setShowForm] = useState(false);
    const toggleCreateUserForm = () => {
        setShowForm((prev) => !prev);
    }

    return <>
        <PageTitle title='Users' />
        <main className="flex-1 p-4 overflow-auto">
            <div className="bg-white rounded shadow p-4 mb-4">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">Users</h1>
                <div className="text-gray-600">This area does not grow past the screen. It stays scrollable inside itself.</div>
            {/* </div>

            <div className="bg-white rounded shadow p-4 mb-4"> */}
            <button 
                onClick={toggleCreateUserForm}
                className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                {showForm ? "Hide " : "Show " } Create User
            </button>
                {/* <ShowCreateUser /> */}
            </div>

            <div className="bg-white rounded shadow p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">SVG Generator</h2>
                <p className="text-gray-600">
                    <a href="https://svg-path.com/" target="_blank">https://svg-path.com/</a>
                </p>
            </div>
            <div className="bg-white rounded shadow p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">More Content</h2>

                {/* <button data-tooltip-target="tooltip-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>

                <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                
                <div>
                    <Tooltip title="This is a Material UI Tooltip" arrow>
                        <button className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none transition">
                            Hover Me
                            <InfoIcon className="text-white" />
                        </button>
                    </Tooltip>
                </div>

                <p className="text-gray-600" style={{ height: "3000px" }}>Still contained, not causing page scroll.</p>
            </div>
        </main>
        {/* Right Sidebar */}
        {showForm && (
            <Suspense fallback="loading...">
                <CreateUser />
            </Suspense>
        )}
        
    </>
}

export default Users;