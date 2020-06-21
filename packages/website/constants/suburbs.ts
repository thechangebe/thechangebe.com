export const sources = {
    australianCapitalTerritory: { name: 'act', id: 'actSuburbs' },
    newSouthWales: { name: 'nsw', id: 'nswSuburbs' },
    queensland: { name: 'qld', id: 'qldSuburbs' },
    southAustralia: { name: 'sa', id: 'saSuburbs' },
    tasmania: { name: 'tas', id: 'tasSuburbs' },
    victoria: { name: 'vic', id: 'vicSuburbs' },
    westernAustralia: { name: 'wa', id: 'waSuburbs' },
}

export const victorianSuburbFills = {
    id: 'victorianSuburbFills',
    source: sources.victoria.id,
    type: 'fill',
    layout: {},
    paint: {
        'fill-color': '#627BC1',
        'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0.1,
        ],
    },
}

export const victorianSuburbBorders = {
    id: 'victorianSuburbBorders',
    type: 'line',
    source: sources.victoria.id,
    layout: {},
    paint: {
        'line-color': '#627BC1',
        'line-width': 2,
    },
}
