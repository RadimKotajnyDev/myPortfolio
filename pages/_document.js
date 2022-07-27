import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="cs">
            <Head>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title></title>
            </Head>
            <body className="font-Inter">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}