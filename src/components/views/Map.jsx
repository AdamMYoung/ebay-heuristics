import React, { useEffect } from 'react';
import * as L from 'leaflet';

export const Map = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 8);

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbW15b3VuZzk3IiwiYSI6ImNrOW41bXl4dTAxN2IzbW8xMzJvdnZqNm4ifQ.IkZjohP6vJNnrpJy6VQNLA'
        ).addTo(map);
    }, []);

    return <div style={{ width: '100%', height: '80vh' }} id="map" />;
};
