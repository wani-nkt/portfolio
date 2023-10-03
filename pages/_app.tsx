import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>nkt's portfolio</title>
                <meta name="description" content="nkt's portfolio page." />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp