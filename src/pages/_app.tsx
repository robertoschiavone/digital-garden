import React from "react"

import "../../public/style.css"
import "katex/dist/katex.min.css"

import Head from "next/head"

import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) =>
    <>
        <Head>
            <meta name="viewport" content="width=device-width;
                    initial-scale=1.0; maximum-scale=1.0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="description"
                content="Genius, billionaire, playboy, philanthropist.
                I'm none of these things. All opinions are of my own."
            />
            <title>Roberto Schiavone</title>
        </Head>
        <Component {...pageProps} />
    </>

export default App
