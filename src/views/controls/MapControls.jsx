import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { AuthenticationContext } from '../../providers/AuthenticationProvider';

export const MapControls = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    const onLogin = () => (window.location.href = process.env.REACT_APP_EBAY_AUTH_URL);

    return (
        <div>
            {!isAuthenticated && (
                <Button variant="outline-light" onClick={onLogin}>
                    Login to eBay
                </Button>
            )}
        </div>
    );
};
