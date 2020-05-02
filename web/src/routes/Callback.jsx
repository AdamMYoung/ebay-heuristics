import React, { useContext, useEffect, useState } from 'react';

import { AuthenticationContext } from '../providers/AuthenticationProvider';
import { Redirect } from 'react-router-dom';

export const Callback = () => {
    const [redirect, setRedirect] = useState(false);
    const { onSignIn } = useContext(AuthenticationContext);

    useEffect(() => {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        console.log('Test', queryString);
        onSignIn(params.get('code'));
        setRedirect(true);
    }, []);

    return <div>{redirect && <Redirect to="/" />}</div>;
};
