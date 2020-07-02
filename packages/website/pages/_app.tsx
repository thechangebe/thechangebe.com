import React, { ReactElement } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '@constants/theme'
import { FontHeadTags, SeoHeadTags, PrismicPreview } from 'components'
import normalize from 'normalize.css'

const CustomApp = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                {/* @todo - Ensure favicon is not NextJS logo. */}
                <link href="/static/favicon.ico" rel="shortcut icon" />
                <link rel="icon" href="/favicon.ico" />
                <FontHeadTags />
                <SeoHeadTags />
                <PrismicPreview />
            </Head>
            <ThemeProvider theme={theme}>
                <Global
                    styles={css`
                        ${normalize}
                        body {
                            background: ${theme.colors.black};
                        }
                    `}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default CustomApp
