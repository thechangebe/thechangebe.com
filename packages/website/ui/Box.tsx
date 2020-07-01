import styled from '@emotion/styled'
import {
    layout,
    space,
    grid,
    color,
    SpaceProps,
    LayoutProps,
    GridProps,
    BackgroundColorProps,
} from 'styled-system'

type BoxProps = SpaceProps & LayoutProps & GridProps & BackgroundColorProps

export const Box = styled('div')<BoxProps>(space, color, layout, grid)
