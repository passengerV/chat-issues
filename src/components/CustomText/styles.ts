import styled from '@emotion/native';

const DEFAULT_COLOR = 'black';

export const StyledText = styled.Text<{color?: string}>`
  color: ${({color}) => color || DEFAULT_COLOR};
`;
