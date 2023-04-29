import React from 'react';
import NavBar from '../../SheardPage/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const DashBordLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBordLayout;