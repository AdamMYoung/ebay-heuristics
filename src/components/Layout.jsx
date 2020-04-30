import React from 'react';

import { NavBar } from './navigation/NavBar';
import { Routes } from './Routes';

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <div style={{ margin: 12 }}>
                <Routes />
            </div>
        </div>
    );
};
