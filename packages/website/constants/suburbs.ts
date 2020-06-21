export const sources = {
    victoria: {
        name: 'vic',
        id: 'vicSuburbs',
    },
    southAustralia: {
        name: 'sa',
        id: 'saSuburbs',
    },
    westernAustralia: {
        name: 'wa',
        id: 'waSuburbs',
    },
    australianCapitalTerritory: {
        name: 'act',
        id: 'actSuburbs',
    },
    queensland: {
        name: 'qld',
        id: 'qldSuburbs',
    },
    newSouthWales: {
        name: 'nsw',
        id: 'nswSuburbs',
    },
    tasmania: {
        name: 'tas',
        id: 'tasSuburbs',
    },
}

export const victoria = {
    id: 'victorianSuburbsLayer',
    source: sources.victoria.id,
    type: 'fill',
    paint: { 'fill-opacity': 0.8 },
}
