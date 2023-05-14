import styled from '@emotion/native';
import {CustomText} from '../../components';
import {unit} from '../../utils';

const SPACING = 10;
const FONT_SIZE = 25;
const BORDER_RADIUS = 40;
const FONT_WEIGHT = '700';
const BACKGROUND = '#323333';

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 10%;
  align-items: center;
  justify-content: center;
  margin: ${unit(SPACING)};
  background-color: ${BACKGROUND};
  border-radius: ${unit(BORDER_RADIUS)};
`;
export const StyledText = styled(CustomText)`
  color: white;
  font-weight: ${FONT_WEIGHT};
  font-size: ${unit(FONT_SIZE)};
`;
