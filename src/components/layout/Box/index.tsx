import { Responsive } from '@/types/styles';
import { Color, Space, toPropValue } from '@/utils/styles';
import styled from 'styled-components';

export type BoxProps = {
    color?: Responsive<Color>;
    backgroundColor?: Responsive<Color>;
    width?: Responsive<string>;
    height?: Responsive<string>;
    minWidth?: Responsive<string>;
    minHeight?: Responsive<string>;
    display?: Responsive<string>;
    border?: Responsive<string>;
    overflow?: Responsive<string>;
    margin?: Responsive<Space>;
    marginTop?: Responsive<Space>;
    marginRight?: Responsive<Space>;
    marginBottom?: Responsive<Space>;
    marginLeft?: Responsive<Space>;
    padding?: Responsive<Space>;
    paddingTop?: Responsive<Space>;
    paddingRight?: Responsive<Space>;
    paddingBottom?: Responsive<Space>;
    paddingLeft?: Responsive<Space>;
};

const Box = styled.div<BoxProps>`
    ${(props) => toPropValue('color', props.color, props.theme as any)}
    ${(props) => toPropValue('background-color', props.backgroundColor, props.theme as any)}
  ${(props) => toPropValue('width', props.width, props.theme as any)}
  ${(props) => toPropValue('height', props.height, props.theme as any)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme as any)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme as any)}
  ${(props) => toPropValue('display', props.display, props.theme as any)}
  ${(props) => toPropValue('border', props.border, props.theme as any)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme as any)}
  ${(props) => toPropValue('margin', props.margin, props.theme as any)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme as any)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme as any)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme as any)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme as any)}
  ${(props) => toPropValue('padding', props.padding, props.theme as any)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme as any)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme as any)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme as any)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme as any)}
`;

export default Box;
