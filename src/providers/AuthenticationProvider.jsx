import React, { useState } from 'react';

export const AuthenticationContext = React.createContext({
    isAuthenticated: false,
    onSignIn: () => {},
});

const AuthenticationProvider = (props) => {
    const [authToken, setAuthToken] = useState(null);

    const authStatus = {
        isAuthenticated: !!authToken,
        onSignIn: setAuthToken,
    };

    return <AuthenticationContext.Provider value={authStatus}>{props.children}</AuthenticationContext.Provider>;
};

export default AuthenticationProvider;
