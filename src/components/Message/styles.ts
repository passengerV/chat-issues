import styled from '@emotion/native';
import Animated from 'react-native-reanimated';
import {unit} from '../../utils';
import {CustomText} from '../CustomText';

const HEIGHT = 50;
const SPACING = 10;
const FONT_SIZE = 18;
const FONT_WEIGHT = '700';
const BACKGROUND = '#412656';

export const Container = styled(Animated.View)<{width: string}>`
  align-items: center;
  justify-content: center;
  height: ${unit(HEIGHT)};
  width: ${({width}) => width};
  margin-left: ${unit(SPACING)};
  background-color: ${BACKGROUND};
  margin-vertical: ${unit(SPACING)};
  border-radius: ${unit(HEIGHT / 2)};
`;

export const StyledText = styled(CustomText)`
  color: white;
  font-weight: ${FONT_WEIGHT};
  font-size: ${unit(FONT_SIZE)};
`;
