import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import PageTitle from './shared/PageTitle';

function Users() {
    return <>
        <PageTitle title='Users' />
        <main className="flex-1 p-4 overflow-auto">
            <div className="bg-white rounded shadow p-4 mb-4">
                <h1 className="text-2xl font-bold mb-2 text-gray-800">Users</h1>
                <div className="text-gray-600">This area does not grow past the screen. It stays scrollable inside itself.</div>
            {/* </div>

            <div className="bg-white rounded shadow p-4 mb-4"> */}
                <div className="text-gray-600">
                    <div className="relative flex flex-col rounded-xl bg-transparent">
                        <h4 className="block text-xl font-medium text-slate-800">
                            Create New User
                        </h4>
                        <p className="text-slate-500 font-light">
                            Nice to meet you! Enter your details to register.
                        </p>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <div className="w-full max-w-sm min-w-[200px]">
                                    <label className="block mb-2 text-sm text-slate-600">
                                        Your Name
                                    </label>
                                    <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                                </div>
                                <div className="w-full max-w-sm min-w-[200px]">
                                    <label className="block mb-2 text-sm text-slate-600">
                                        Email
                                    </label>
                                    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                                </div>
                                <div className="w-full max-w-sm min-w-[200px]">
                                    <label className="block mb-2 text-sm text-slate-600">
                                        Password
                                    </label>
                                    <input type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                                </div>
                            </div>
                            <div className="inline-flex items-center mt-2">
                                <label className="flex items-center cursor-pointer relative">
                                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                                    <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="cursor-pointer ml-2 text-slate-600 text-sm">
                                    Remember Me
                                </label>
                            </div>
                            <button className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Create User
                            </button>
                            <p className="flex justify-center mt-6 text-sm text-slate-600">
                                Don&apos;t have an account?
                                <a href="#signup" className="ml-1 text-sm font-semibold text-slate-700 underline">
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
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
    </>
}

export default Users;