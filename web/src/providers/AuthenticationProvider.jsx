import React, { useState } from 'react';
import * as ebayApi from '../api/ebayApi';
import * as authUtils from '../utils/authUtils';

export const AuthenticationContext = React.createContext({
    isAuthenticated: false,
    isLoading: false,
    authToken: null,
    onSignIn: () => {},
});

const AuthenticationProvider = (props) => {
    const [authToken, setAuthToken] = useState(authUtils.getToken());
    const [isLoading, setLoading] = useState(false);

    const getAuthToken = async (consentToken) => {
        setLoading(true);
        const token = await ebayApi.mintToken(consentToken);
        authUtils.setToken(token);

        setAuthToken(authUtils.getToken());
        setLoading(false);
    };

    const authStatus = {
        isAuthenticated: !!authToken,
        authToken,
        isLoading,
        onSignIn: (consent) => getAuthToken(consent),
    };

    return <AuthenticationContext.Provider value={authStatus}>{props.children}</AuthenticationContext.Provider>;
};

export default AuthenticationProvider;
