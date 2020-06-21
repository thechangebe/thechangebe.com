import * as React from 'react'
import { Layer } from 'react-map-gl'
import { victorianSuburbBorders } from '@constants/suburbs'

/* @ts-ignore */
export default ({ config }: any) => {
    return <Layer {...config}></Layer>
}
