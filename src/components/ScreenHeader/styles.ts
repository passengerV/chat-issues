import styled from '@emotion/native';
import {unit} from '../../utils';
import {CustomText} from '../CustomText';

const HEIGHT = 56;
const FONT_SIZE = 16;
const BORDER_WIDTH = 2;
const FONT_WEIGHT = '700';
const HORIZONTAL_SPACING = 20;

export const HIT_SLOP = {top: 10, left: 10, right: 10, bottom: 10};

export const Container = styled.View<{isDark?: boolean}>`
  align-items: center;
  flex-direction: row;
  height: ${unit(HEIGHT)};
  justify-content: space-between;
  border-bottom-width: ${unit(BORDER_WIDTH)};
  padding-horizontal: ${unit(HORIZONTAL_SPACING)};
`;

export const Button = styled.TouchableOpacity`
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  left: 0;
  right: 0;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(CustomText)`
  width: 70%;
  text-align: center;
  font-weight: ${FONT_WEIGHT};
  font-size: ${unit(FONT_SIZE)};
`;
