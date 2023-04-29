import React from 'react';
import NavBar from '../../SheardPage/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const DashBordLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-5 ">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li>side bar 1</li>
                    <li>side bar 1</li>
                
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashBordLayout;