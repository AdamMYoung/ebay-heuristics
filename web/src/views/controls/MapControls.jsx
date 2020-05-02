import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const MapControls = (props) => {
    /**
     * Called when the user attempts to log in.
     */
    const onLogin = () => (window.location.href = process.env.REACT_APP_EBAY_AUTH_URL);
    return (
        <div>
            {!props.isAuthenticated && (
                <Button variant="outline-light" onClick={onLogin}>
                    Login to eBay
                </Button>
            )}

            {props.isAuthenticated && (
                <Button variant="outline-light" onClick={props.onLoadOrders}>
                    Load Orders
                </Button>
            )}
        </div>
    );
};

MapControls.propTypes = {
    onLoadOrders: PropTypes.func.isRequired,
};
