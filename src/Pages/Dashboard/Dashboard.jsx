import React from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom'; 

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Outlet /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
