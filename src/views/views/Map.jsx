import React, { useEffect } from 'react';
import * as L from 'leaflet';

import { MapControls } from '../controls/MapControls';

export const Map = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 8);

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbW15b3VuZzk3IiwiYSI6ImNrOW41bXl4dTAxN2IzbW8xMzJvdnZqNm4ifQ.IkZjohP6vJNnrpJy6VQNLA'
        ).addTo(map);
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, margin: 24, zIndex: 1000 }}>
                <MapControls />
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} id="map" />;
        </div>
    );
};
