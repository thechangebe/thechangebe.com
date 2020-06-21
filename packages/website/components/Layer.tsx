import * as React from 'react'
import { Layer } from 'react-map-gl'
import { sources } from 'constants/suburbs'

const victorianSuburbs = {
    id: 'victorianSuburbsLayer',
    source: sources.victoria.id,
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'value',
            stops: [[0, '#F2F12D']],
        },
        'fill-opacity': 0.8,
    },
}

export default (dataset: any) => <Layer {...victorianSuburbs}></Layer>
