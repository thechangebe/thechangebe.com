import React from 'react'
import { Box, Grid, Paragraph, H2 } from '@styled-system'

import { RichText } from 'prismic-reactjs'
import { PrismicClient } from '../clients/prismic'
import { GetStaticProps } from 'next'

interface IndexPageProps {
    tagline: string
    cta: string
}

const IndexPage = ({ tagline, cta }: IndexPageProps): React.ReactElement => {
    return (
        <>
            <Grid
                maxWidth="100vw"
                gridAutoFlow="row"
                gridTemplateColumns={{ xs: '100%', m: '50% 50%', l: '44% 56%' }}
                gridTemplateRows={{ xs: 'auto', l: '100vh' }}
            >
                <Box p={{ xs: 's', s: 'm', m: 'l' }} overflow="hidden">
                    <H2
                        fontSize={{ xs: 'xl', m: 'xl', l: 'xxl' }}
                        fontFamily="serif"
                        color="white"
                        fontWeight="black"
                    >
                        {RichText.asText(tagline)}
                    </H2>
                </Box>
                <Box p={3}>
                    <Paragraph
                        fontSize={{ xs: 's', m: 'xs' }}
                        color="white"
                        fontFamily="monospace"
                        p={{ xs: 's', l: 'xl' }}
                    >
                        {RichText.render(cta)}
                    </Paragraph>
                </Box>
            </Grid>
        </>
    )
}

interface IndexStaticProps {
    props: {
        tagline: string
        cta: string
    }
}

export const getStaticProps: GetStaticProps = async (): Promise<
    IndexStaticProps
> => {
    const { data } = await PrismicClient.getSingle('waitlist', {})
    const { tagline, cta } = data
    return {
        props: { tagline, cta },
    }
}

export default IndexPage
