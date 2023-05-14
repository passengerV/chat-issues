import React, {ReactNode} from 'react';
import {ScreenHeader} from '../ScreenHeader';
import {Container} from './styles';

interface Props {
  headerTitle?: string;
  children?: ReactNode;
  onInfoPress?: () => void;
}

export const Screen: React.FC<Props> = ({
  headerTitle,
  onInfoPress,
  children,
}) => {
  return (
    <Container>
      {headerTitle && (
        <ScreenHeader title={headerTitle} onInfoPress={onInfoPress} />
      )}
      {children}
    </Container>
  );
};
