import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from './views/Layout';
import AuthenticationProvider from './providers/AuthenticationProvider';

function App() {
    return (
        <BrowserRouter>
            <AuthenticationProvider>
                <Layout />
            </AuthenticationProvider>
        </BrowserRouter>
    );
}

export default App;
