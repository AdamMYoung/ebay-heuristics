import React, { useState } from 'react';

export const AuthenticationContext = React.createContext({
    isAuthenticated: false,
    authToken: null,
    onSignIn: () => {},
});

const AuthenticationProvider = (props) => {
    const [authToken, setAuthToken] = useState(null);
    console.log('Auth TOken:', authToken);

    const authStatus = {
        isAuthenticated: !!authToken,
        authToken,
        onSignIn: (auth) => setAuthToken(auth),
    };

    return <AuthenticationContext.Provider value={authStatus}>{props.children}</AuthenticationContext.Provider>;
};

export default AuthenticationProvider;
