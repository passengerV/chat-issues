import styled from '@emotion/native';
import {CustomText} from '../../components';
import {unit} from '../../utils';

const SPACING = 10;
const FONT_SIZE = 17;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${unit(SPACING)};
`;

export const StyledText = styled(CustomText)`
  margin-bottom: ${unit(SPACING)};
  font-size: ${unit(FONT_SIZE)};
`;
