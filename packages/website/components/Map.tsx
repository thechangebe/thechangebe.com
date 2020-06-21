import { useState } from 'react'
import { InteractiveMap } from 'react-map-gl'
import { defaultMapSettings } from 'constants/map'

export default ({ children }: { children: any }) => {
    const [viewport, setViewport] = useState(defaultMapSettings)
    // const [activeSuburb, setActiveSuburb] = useState({ activeSuburb: '' })

    return (
        <InteractiveMap
            // @todo - Set Access Token via Env.
            mapStyle="mapbox://styles/thechangebe/ckbodarip393x1inx55ba34rg"
            mapboxApiAccessToken="pk.eyJ1IjoidGhlY2hhbmdlYmUiLCJhIjoiY2tibmRybGdqMXJ5ajJ2cW43bnNub3A5dyJ9.BOp3bf8_eooK1IeohZbriA"
            transitionDuration={1000}
            onViewportChange={(viewport: any) => setViewport({ ...viewport })}
            onClick={(e: any) => console.log(e)}
            onMouseMove={(e: any) => console.log(e)}
            {...viewport}
        >
            {children}
        </InteractiveMap>
    )
}
