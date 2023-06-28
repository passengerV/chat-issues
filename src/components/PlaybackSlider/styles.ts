import {unit} from './../../utils/unit';
import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

const KNOB_BORDER = 4;
const SLIDER_HEIGHT = 4;
export const KNOB_SIZE = 16;
export const SLIDER_BORDER_WIDTH = 0.6;
const FOREGROUND_COLOR = '#0163E5';
const WHITE = '#FFFFFF';
const BACKGROUND = '#E6F1FF';

export const Container = styled.View<{hasBorder?: boolean}>`
  justify-content: center;
  height: ${unit(SLIDER_HEIGHT)};
  border-radius: ${unit(SLIDER_HEIGHT / 2)};
  background-color: ${({hasBorder}) => (hasBorder ? WHITE : BACKGROUND)};
  border: ${({hasBorder}) =>
    hasBorder ? `${unit(SLIDER_BORDER_WIDTH)} solid ${FOREGROUND_COLOR}` : ''};
`;

export const ProgressBar = styled(Animated.View)`
  position: absolute;
  height: ${unit(SLIDER_HEIGHT)};
  border-radius: ${unit(SLIDER_HEIGHT / 2)};
  background-color: ${FOREGROUND_COLOR};
`;

export const Knob = styled(Animated.View)`
  position: absolute;
  width: ${unit(KNOB_SIZE)};
  height: ${unit(KNOB_SIZE)};
  left: -${unit(SLIDER_BORDER_WIDTH)};
  border-radius: ${unit(KNOB_SIZE / 2)};
  background-color: ${WHITE};
  border: ${unit(KNOB_BORDER)} solid ${FOREGROUND_COLOR};
`;
