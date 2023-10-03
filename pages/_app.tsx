import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/global.css';

import Header from '../components/Header';

function MyApp({ Component, pageProps, router }: AppProps) {
    const [path, setPath] = useState(router.pathname)
    useEffect(() => {
        setPath(router.pathname)
    }, [router.pathname])

    return (
        <>
            <Head>
                <title>nkt's portfolio</title>
                <meta name="description" content="nkt's portfolio page." />
            </Head>
            <Header currentPage={path} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp