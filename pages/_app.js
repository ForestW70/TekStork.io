import Head from 'next/head'

import '../styles/globals.css'

import Layout from "../lib/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TekStork Solutions</title>
        <meta name="description" content="Generated from create next app, for TekStork.io, by Forest Wilson" />
        <link rel="icon" href="/stork-icon.jpg" />
      </Head>

      <Layout>
        <Component {...pageProps} />

      </Layout>
    </>
  )
}

export default MyApp
