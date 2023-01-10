import Head from 'next/head';
import React from 'react';
import TestComp from '../ui_components/test';
const Home = () => {
    return (
        <>
            <Head>
                <title>E-library</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TestComp />
        </>
    );
};
export default Home;