import React from 'react';

import { NavBar } from './navigation/NavBar';
import { Map } from './navigation/Map';

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <div style={{ margin: 12 }}>
                <Map />
            </div>
        </div>
    );
};
