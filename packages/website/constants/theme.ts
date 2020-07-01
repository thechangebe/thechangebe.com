// - Layout
const breakpoints = {
    xs: '0',
    s: '600px',
    m: '960px',
    l: '1280px',
    xl: '1920px',
}

const mediaQueries = {
    xs: `@media screen and (min-width: ${breakpoints[0]})`,
    s: `@media screen and (min-width: ${breakpoints[1]})`,
    m: `@media screen and (min-width: ${breakpoints[2]})`,
    l: `@media screen and (min-width: ${breakpoints[3]})`,
    xl: `@media screen and (min-width: ${breakpoints[4]})`,
}

const space = {
    none: 0,
    xxs: 4,
    xs: 8,
    s: 16,
    m: 32,
    l: 64,
    xl: 128,
    xxl: 256,
    xxxl: 512,
}

// - Theme
const colors = {
    black: '#100010',
    white: '#F6FFFF',
    blue: '#3066BE',
    green: '#1A936F',
    red: '#F02D3A',
}

const fonts = {
    monospace: 'roboto-mono',
    serif: 'itc-galliard',
    'san-serif': 'roboto-condensed',
}

const fontSizes = {
    // Generic
    xxxs: 9,
    xxs: 13,
    xs: 18,
    s: 25.5,
    m: 36,
    l: 51,
    xl: 72,
    xxl: 102,

    // Headings
    h1: { s: 24, m: 51, l: 102 },
    h2: { s: 20, m: 22, l: 24 },
    h3: { s: 19, m: 22, l: 28 },
    h4: { s: 16, m: 18, l: 22 },
    h5: { s: 12, m: 14, l: 16 },

    // Body Text(s)
    p: { s: 24, m: 51, l: 102 },
    a: { s: 24, m: 51, l: 102 },
}

const fontWeights = {
    regular: 300,
    bold: 500,
    block: 700,
    black: 800,
}

export default {
    breakpoints,
    mediaQueries,
    space,
    colors,
    fonts,
    fontSizes,
    fontWeights,
}
