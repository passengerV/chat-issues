import React from 'react';
import {Button, Container, HIT_SLOP, StyledTitle, Wrapper} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CustomText} from '../CustomText';

const TEXT_LINES = 1;

interface Props {
  title?: string;
  onInfoPress?: () => void;
}

export const ScreenHeader: React.FC<Props> = ({title, onInfoPress}) => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <Button onPress={goBack} hitSlop={HIT_SLOP}>
        <CustomText content="Back" />
      </Button>
      <Wrapper>
        <StyledTitle content={title} numberOfLines={TEXT_LINES} />
      </Wrapper>
      {onInfoPress && (
        <Button onPress={onInfoPress} hitSlop={HIT_SLOP}>
          <CustomText content="Info" />
        </Button>
      )}
    </Container>
  );
};
