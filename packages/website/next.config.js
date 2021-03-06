module.exports = {
    target: 'serverless',
    webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = { fs: 'empty' }
        return config
    },
    env: {
        PRISMIC_API_ACCESS_TOKEN: process.env.PRISMIC_API_ACCESS_TOKEN,
    },
    publicRuntimeConfig: {
        MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
        MAPBOX_STYLE_URL: process.env.MAPBOX_STYLE_URL,
    },
}
