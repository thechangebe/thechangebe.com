import React from 'react'

export const FontHeadTags = (): React.ReactElement => (
    <>
        <link rel="stylesheet" href="https://use.typekit.net/yam0hky.css" />
        <script
            dangerouslySetInnerHTML={{
                __html: `try{Typekit.load({ async: false });}catch(e){}`,
            }}
        />
    </>
)
