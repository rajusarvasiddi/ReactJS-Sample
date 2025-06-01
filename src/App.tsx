import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import NarrowSidebar from './components/NarrowSidebar';
import Footer from './components/Footer';

function App() {
  return (
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
