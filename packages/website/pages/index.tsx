import Head from 'next/head'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>The Change Be</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Map />

            <footer>Open source, real time democracy.</footer>
        </div>
    )
}
