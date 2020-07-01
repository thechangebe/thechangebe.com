import styled from '@emotion/styled'
import {
    layout,
    space,
    grid,
    SpaceProps,
    GridProps,
    LayoutProps,
} from 'styled-system'

type BoxProps = SpaceProps & GridProps & LayoutProps

export const Grid = styled('div')<BoxProps>(
    space,
    layout,
    grid,
    `
    display: grid;
    `
)
