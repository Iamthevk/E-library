import React from 'react';
import LayOut from '../ui_components/Layout';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>E-library</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the e-library!</h1>
                <LayOut />
            </div>
        </>
    )
};
export default Home;