import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Overview: React.FC = () => {
    return <>
        <div>
            <h2>Overview</h2>
            <p>Content goes here..</p>
        </div>
        <Outlet />
    </>
}

export default Overview