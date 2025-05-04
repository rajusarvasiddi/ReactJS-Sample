import * as React from 'react';
function TopBar() {
    return <div className="bg-black text-white h-8 flex justify-between px-6 items-center text-sm">
    <div className="flex items-center space-x-4 w-1/3">
        <a href="#" className="text-white font-bold text-sm">Logo</a>

        <div className="flex">
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">File</a>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Edit</a>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">View</a>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Window</a>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">Help</a>
        </div>

    </div>

    <div className="w-full max-w-xs mx-auto flex justify-center items-center w-1/3">
        <input type="text" className="w-full py-1 px-3 rounded bg-white text-black text-sm shadow"
            placeholder="Search..." />
    </div>

    <div className="flex items-center space-x-3 w-1/3 justify-end">
        <button className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </button>
        <button className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 17h5l-1.5 3H16.5L15 17zM9 17H4l1.5 3h4.5l1.5-3zM12 9V3l-5 5 5 5V9z" />
            </svg>
        </button>
    </div>
</div>
}

export default TopBar;