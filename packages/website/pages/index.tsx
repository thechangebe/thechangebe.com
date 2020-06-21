import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { sources, victorianSuburbBorders } from 'constants/suburbs'

const Map = dynamic(() => import('../components/Map'), { ssr: false })
const Source = dynamic(() => import('../components/Source'), { ssr: false })
const Layer = dynamic(() => import('../components/Layer'), { ssr: false })

export default function Home() {
    return (
        <>
            <Head>
                <title>The Change Be</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Map>
                <Source
                    id={sources.victoria.id}
                    data={`https://thechangebe.github.io/thechangebe.com/data-sets/suburb-boundaries/${sources.victoria.name}-suburb-boundaries.json`}
                >
                    <Layer config={victorianSuburbBorders} />
                </Source>
            </Map>
        </>
    )
}
