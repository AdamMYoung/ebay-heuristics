import React, { useEffect, useState, useContext } from 'react';
import * as L from 'leaflet';
import * as ebayApi from '../../api/ebayApi';

import { MapControls } from '../controls/MapControls';
import { AuthenticationContext } from '../../providers/AuthenticationProvider';

export const Map = () => {
    const [orders, setOrders] = useState([]);
    const { isAuthenticated, authToken } = useContext(AuthenticationContext);

    /**
     * Loads the map to the screen.
     */
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 8);

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbW15b3VuZzk3IiwiYSI6ImNrOW41bXl4dTAxN2IzbW8xMzJvdnZqNm4ifQ.IkZjohP6vJNnrpJy6VQNLA'
        ).addTo(map);
    }, []);

    /**
     * Adds pins to the map when orders change.
     */
    useEffect(() => {
        console.log(orders);
    }, [orders]);

    /**
     * Loads all orders for the current user.
     */
    const onLoadOrders = async () => {
        if (orders.length > 0) return;

        const newOrders = await ebayApi.loadOrders(authToken);
        setOrders(newOrders.orders);
    };

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, margin: 24, zIndex: 1000 }}>
                <MapControls isAuthenticated={isAuthenticated} onLoadOrders={onLoadOrders} />
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} id="map" />;
        </div>
    );
};
