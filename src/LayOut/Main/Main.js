import React from 'react';
import NavBar from '../../SheardPage/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Fotter from '../../SheardPage/Fotter/Fotter';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;