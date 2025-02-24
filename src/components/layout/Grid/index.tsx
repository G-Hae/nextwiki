import Box, { BoxProps } from '@/components/layout/Box';
import type {
    CSSPropertyGridArea,
    CSSPropertyGridAutoFlow,
    CSSPropertyGridColumn,
    CSSPropertyGridRow,
    Responsive,
} from '@/types/styles';
import { toPropValue } from '@/utils/styles';
import styled from 'styled-components';

type GridProps = BoxProps & {
    gridGap?: Responsive<string>;
    gridColumnGap?: Responsive<string>;
    gridRowGap?: Responsive<string>;
    gridColumn?: Responsive<CSSPropertyGridColumn>;
    gridRow?: Responsive<CSSPropertyGridRow>;
    gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>;
    gridAutoColumns?: Responsive<string>;
    gridAutoRows?: Responsive<string>;
    gridTemplateColumns?: Responsive<string>;
    gridTemplateRows?: Responsive<string>;
    gridTemplateAreas?: Responsive<CSSPropertyGridArea>;
    gridArea?: Responsive<string>;
};

const Grid = styled(Box)<GridProps>`
    ${(props) => toPropValue('grid-gap', props.gridGap, props.theme as any)}
    ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, props.theme as any)}
  ${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme as any)}
  ${(props) => toPropValue('grid-row', props.gridRow, props.theme as any)}
  ${(props) => toPropValue('grid-column', props.gridColumn, props.theme as any)}
  ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme as any)}
  ${(props) => toPropValue('grid-auto-columns', props.gridAutoColumns, props.theme as any)}
  ${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, props.theme as any)}
  ${(props) => toPropValue('grid-template-columns', props.gridTemplateColumns, props.theme as any)}
  ${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, props.theme as any)}
  ${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, props.theme as any)}
  ${(props) => toPropValue('grid-area', props.gridArea, props.theme as any)}
`;

Grid.defaultProps = {
    display: 'grid',
};

export default Grid;
