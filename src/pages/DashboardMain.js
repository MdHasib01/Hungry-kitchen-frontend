import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Settings from '../pages/Settings';
import Maps from '../pages/Maps';
import Tables from '../pages/Tables';
import Dashboard from './Dashboard';
import Footer from '../common/Footer';
// Tailwind CSS Style Sheet
import '../assets/styles/tailwind.css';
const DashboardMain = () => {
    return (
        <div>
        <Sidebar></Sidebar>
        <div className="md:ml-64">
        <Routes>
            <Route path='settings' element={<Settings></Settings>}/>
            <Route path='tables' element={<Tables></Tables>}/>
            <Route path='maps' element={<Maps></Maps>}/>
            <Route path='/' element={<Dashboard></Dashboard>}/>
        </Routes>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default DashboardMain;