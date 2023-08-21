import React from "react"

import {Head, Html, Main, NextScript} from "next/document"

const Document = () =>
    <Html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <link rel="manifest" href="/manifest.webmanifest"/>
            <link rel="icon" href="/favicon.ico" sizes="32x32"/>
            <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

            <meta name="robots" content="follow, index"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        </Head>
        <body>

        <Main/>
        <NextScript/>
        </body>
    </Html>


export default Document
