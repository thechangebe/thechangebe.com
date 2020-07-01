import styled from '@emotion/styled'
import {
    typography,
    space,
    color,
    SpaceProps,
    TypographyProps,
    ColorStyleProps,
} from 'styled-system'

type BodyProps = SpaceProps & TypographyProps & ColorStyleProps

export const Paragraph = styled('p')<BodyProps>(space, typography, color)
