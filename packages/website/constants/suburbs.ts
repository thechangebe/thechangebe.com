export const sources = {
    australianCapitalTerritory: { name: 'act', id: 'actSuburbs' },
    newSouthWales: { name: 'nsw', id: 'nswSuburbs' },
    queensland: { name: 'qld', id: 'qldSuburbs' },
    southAustralia: { name: 'sa', id: 'saSuburbs' },
    tasmania: { name: 'tas', id: 'tasSuburbs' },
    victoria: { name: 'vic', id: 'vicSuburbs' },
    westernAustralia: { name: 'wa', id: 'waSuburbs' },
}

export const victoria = {
    id: 'victorianSuburbsLayer',
    source: sources.victoria.id,
    type: 'fill',
    paint: { 'fill-opacity': 0.8 },
}
