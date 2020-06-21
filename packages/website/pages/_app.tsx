import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'
import normalize from 'normalize.css'

export default ({ Component, pageProps }: AppProps) => {
    const title = 'The Change Be'
    const description = 'Open Source, Real-time Democracy'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link href="/static/favicon.ico" rel="shortcut icon" />
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/yam0hky.css"
                />
                <meta content={description} name="description" />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="/static/banner.jpg" />
                <meta content="en_US" property="og:locale" />
                <meta content={description} property="og:description" />
                <meta
                    content="https://next-mapbox-demo.now.sh"
                    property="og:url"
                />
            </Head>
            <Global
                styles={css`
                    ${normalize}
                `}
            />
            <Component {...pageProps} />
        </>
    )
}
