import { useState } from 'react'
import { InteractiveMap, PointerEvent } from 'react-map-gl'
import { defaultMapSettings } from 'constants/map'
import { isEmpty, isNil } from 'ramda'
import { sources } from '@constants/suburbs'

const getFeatureFromSource = (features: any[]): SuburbType | null =>
    features.find((f) =>
        Object.values(sources)
            .map((s) => s.id)
            .includes(f.layer.source)
    )

interface SuburbType {
    id?: string
    layer: { id: string; type: 'fill'; source: string; paint: any; layout: any }
    properties: {
        lc_ply_pid: string
        loc_pid: string
        vic_loca_2: 'MENTONE'
    }
    source: string
    state: {}
}

export default ({ children }: { children: any }) => {
    const [viewport, setViewport] = useState(defaultMapSettings)
    const [activeSuburb, setActiveSuburb] = useState(null)

    const onHover = ({ features, srcEvent }: PointerEvent) => {
        if (isNil(features) || isEmpty(features)) return

        const suburb = getFeatureFromSource(features)

        if (suburb) {
            console.log({ suburb, activeSuburb })
            setActiveSuburb(suburb.properties.vic_loca_2)
        }
    }

    return (
        <InteractiveMap
            mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            transitionDuration={1000}
            onViewportChange={(viewport: any) => setViewport({ ...viewport })}
            onHover={(e: PointerEvent) => onHover(e)}
            {...viewport}
        >
            {children}
        </InteractiveMap>
    )
}
