import styled from '@emotion/styled'
import {
    typography,
    space,
    color,
    SpaceProps,
    TypographyProps,
} from 'styled-system'

type HeadingProps = SpaceProps & TypographyProps

export const H1 = styled('h1')<HeadingProps>(space, color, typography)
export const H2 = styled('h2')<HeadingProps>(space, color, typography)
export const H3 = styled('h3')<HeadingProps>(space, color, typography)
export const H4 = styled('h4')<HeadingProps>(space, color, typography)
export const H5 = styled('h4')<HeadingProps>(space, color, typography)
