import React, { useContext, useEffect, useState } from 'react';

import { AuthenticationContext } from '../providers/AuthenticationProvider';
import { Redirect } from 'react-router-dom';

export const Callback = () => {
    const [redirect, setRedirect] = useState(false);
    const { onSignIn } = useContext(AuthenticationContext);

    useEffect(() => {
        const queryString = window.location.search;
        const start = queryString.indexOf('code=');
        const end = queryString.indexOf('&');

        const code = queryString.substring(start, end);
        onSignIn(code);

        setRedirect(true);
    }, []);

    return <div>{redirect && <Redirect to="/" />}</div>;
};
