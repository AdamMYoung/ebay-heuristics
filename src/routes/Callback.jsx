import React, { useContext, useEffect } from 'react';

import { AuthenticationContext } from '../providers/AuthenticationProvider';

export const Callback = () => {
    const { onSignIn } = useContext(AuthenticationContext);

    useEffect(() => {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);

        onSignIn(params.get('code'));
        window.location.href = '/';
    }, []);

    return <div />;
};
