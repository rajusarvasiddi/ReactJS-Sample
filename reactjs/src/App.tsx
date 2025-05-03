import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import NarrowSidebar from './components/NarrowSidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Link to="dashboard">Dashboard</Link>
    //     <Link to="users">User Management</Link>
    //     <Link to="reports">Reports</Link>
    //     Version :: {React.version}
    //   </BrowserRouter>
    // </div>
    <>
    <BrowserRouter>
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
      <NarrowSidebar />
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
