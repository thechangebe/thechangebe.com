import * as React from 'react'
import { Source } from 'react-map-gl'
import { useAsync } from 'react-use'

export default ({
    children,
    id,
    data,
}: {
    children: any
    id: string
    data: any
}) => {
    return (
        <Source type="geojson" id={id} data={data}>
            {children}
        </Source>
    )
}