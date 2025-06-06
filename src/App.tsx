import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './features/TopBar';
import NarrowSidebar from './features/NarrowSidebar';
import Footer from './features/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
          {/* <div className="flex">Notification messages</div> */}
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
