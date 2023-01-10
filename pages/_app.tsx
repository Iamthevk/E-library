import React from 'react';
import Head from 'next/head';

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default App;