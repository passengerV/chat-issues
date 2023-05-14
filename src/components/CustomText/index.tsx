import React from 'react';
import {TextProps} from 'react-native';
import {StyledText} from './styles';

export interface Props extends TextProps {
  content?: string;
  color?: string;
}

export const CustomText: React.FC<Props> = ({
  content,
  color,
  children,
  ...props
}) => {
  return (
    <StyledText color={color} {...props}>
      {content || children}
    </StyledText>
  );
};
