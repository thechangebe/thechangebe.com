import Prismic from 'prismic-javascript'

// @todo - set via env instead of hardcoding.
export const apiEndpoint = 'https://thechangebe.cdn.prismic.io/api/v2'

// Client method to query documents from the Prismic repo
export const PrismicClient = Prismic.client(apiEndpoint, {
    accessToken: process.env.PRISMIC_API_ACCESS_TOKEN,
})
