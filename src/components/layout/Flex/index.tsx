import Box, { BoxProps } from '@/components/layout/Box';
import type {
    CSSPropertyAlignContent,
    CSSPropertyAlignItems,
    CSSPropertyAlignSelf,
    CSSPropertyFlexDirection,
    CSSPropertyFlexWrap,
    CSSPropertyJustifyContent,
    CSSPropertyJustifyItems,
    CSSPropertyJustifySelf,
    Responsive,
} from '@/types/styles';
import { toPropValue } from '@/utils/styles';
import styled from 'styled-components';

type FlexProps = BoxProps & {
    alignItems?: Responsive<CSSPropertyAlignItems>;
    alignContent?: Responsive<CSSPropertyAlignContent>;
    justifyContent?: Responsive<CSSPropertyJustifyContent>;
    justifyItems?: Responsive<CSSPropertyJustifyItems>;
    flexWrap?: Responsive<CSSPropertyFlexWrap>;
    flexBasis?: Responsive<string>;
    flexDirection?: Responsive<CSSPropertyFlexDirection>;
    flexGrow?: Responsive<string>;
    flexShrink?: Responsive<string>;
    justifySelf?: Responsive<CSSPropertyJustifySelf>;
    alignSelf?: Responsive<CSSPropertyAlignSelf>;
    order?: Responsive<string>;
};

/**
 * Flex 컴포넌트
 * flexbox 구현에 사용한다
 */
const Flex = styled(Box)<FlexProps>`
    ${(props) => toPropValue('align-items', props.alignItems, props.theme as any)}
    ${(props) => toPropValue('align-content', props.alignContent, props.theme as any)}
  ${(props) => toPropValue('justify-content', props.justifyContent, props.theme as any)}
  ${(props) => toPropValue('justify-items', props.justifyItems, props.theme as any)}
  ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme as any)}
  ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme as any)}
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme as any)}
  ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme as any)}
  ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme as any)}
  ${(props) => toPropValue('justify-self', props.justifySelf, props.theme as any)}
  ${(props) => toPropValue('align-self', props.alignSelf, props.theme as any)}
  ${(props) => toPropValue('order', props.order, props.theme as any)}
`;

Flex.defaultProps = {
    display: 'flex',
};

export default Flex;
