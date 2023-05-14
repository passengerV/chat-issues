import styled from '@emotion/native';
import {unit} from '../../utils';
import {CustomText} from '../CustomText';

const BORDER_WIDTH = 3;
const BUTTON_HEIGHT = 30;
const BORDER_COLOR = 'black';
const BUTTON_COLOR = '#328094';

export const Container = styled.SafeAreaView`
  height: 10%;
  align-items: center;
  justify-content: center;
  border-top-color: ${BORDER_COLOR};
  border-top-width: ${unit(BORDER_WIDTH)};
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  height: ${unit(BUTTON_HEIGHT)};
  background-color: ${BUTTON_COLOR};
  border-radius: ${unit(BUTTON_HEIGHT / 2)};
`;

export const StyledText = styled(CustomText)`
  font-weight: 700;
`;
