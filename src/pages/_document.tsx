import React from "react"

import { Head, Html, Main, NextScript } from "next/document"

const Document = () =>
    <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="follow, index" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <link rel="icon" type="image/x-icon" href="/images/icon.png" />
        </Head>
        <body>

        <Main />
        <NextScript />
        </body>
    </Html>


export default Document
