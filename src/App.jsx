import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;