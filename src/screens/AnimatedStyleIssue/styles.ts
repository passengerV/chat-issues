import styled from '@emotion/native';
import {unit} from '../../utils';

const BUTTON_PADDING = 15;
const BORDER_RADIUS = 30;
const BUTTON_COLOR = '#328094';
const PLAYBACK_CONTAINER_BOTTOM = 10;
export const PLAYBACK_CONTAINER_PADDING = 20;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${unit(BUTTON_PADDING)};
  background-color: ${BUTTON_COLOR};
  border-radius: ${unit(BORDER_RADIUS)};
`;

export const PlaybackContainer = styled.View`
  height: 10%;
  width: 100%;
  padding: ${unit(PLAYBACK_CONTAINER_PADDING)};
  margin-bottom: ${unit(PLAYBACK_CONTAINER_BOTTOM)};
`;
