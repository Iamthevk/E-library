import React from 'react';
import Head from 'next/head';

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>E-library</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;