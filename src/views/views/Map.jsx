import React, { useEffect, useState, useContext, useRef } from 'react';
import * as L from 'leaflet';

import * as ebayApi from '../../api/ebayApi';
import * as geocodingApi from '../../api/geocodingApi';
import { getCountryName } from '../../utils/countryCodeUtils';
import { MapControls } from '../controls/MapControls';
import { AuthenticationContext } from '../../providers/AuthenticationProvider';

export const Map = () => {
    const [orders, setOrders] = useState([]);
    const map = useRef();
    const { isAuthenticated, isLoading, authToken } = useContext(AuthenticationContext);

    /**
     * Loads the map to the screen.
     */
    useEffect(() => {
        map.current = L.map('map');
        map.current.setView([51.505, -0.09], 8);

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbW15b3VuZzk3IiwiYSI6ImNrOW41bXl4dTAxN2IzbW8xMzJvdnZqNm4ifQ.IkZjohP6vJNnrpJy6VQNLA'
        ).addTo(map.current);
    }, []);

    /**
     * Adds pins to the map when orders change.
     */
    useEffect(() => {
        const loadAddresses = async () => {
            orders.forEach((order, index) => {
                setTimeout(async () => {
                    var address = order.fulfillmentStartInstructions[0].finalDestinationAddress;

                    if (!address) {
                        address = order.fulfillmentStartInstructions[0].shippingStep.shipTo.contactAddress;
                    }

                    const location = await geocodingApi.getGeocodedAddress(
                        address.addressLine1,
                        address.city,
                        getCountryName(address.countryCode),
                        address.postalCode,
                        address.stateOrProvince
                    );

                    const marker = L.marker([location[0].lat, location[0].lon]).addTo(map.current);
                    marker.bindPopup(
                        `<b>${order.buyer.username}</b><br>${address.addressLine1}<br>${address.addressLine2}<br>${address.city}<br>${address.postalCode}`
                    );
                }, index * 1000);
            });
        };
        loadAddresses();
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
                <MapControls isAuthenticated={isAuthenticated} isLoading={isLoading} onLoadOrders={onLoadOrders} />
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} id="map" />;
        </div>
    );
};
