import React, {useCallback, useRef} from 'react';
import {Button, Container, StyledText} from './styles';
import {useAppDispatch} from '../../hooks';
import {addNewMessage} from '../../features/chat';
import {getNewMessage} from './getNewMessage';

export const Composer: React.FC = () => {
  const messageCounter = useRef(0);
  const dispatch = useAppDispatch();

  const handleOnPress = useCallback(() => {
    dispatch(addNewMessage(getNewMessage(messageCounter.current)));
    messageCounter.current += 1;
  }, [dispatch]);

  return (
    <Container>
      <Button onPress={handleOnPress}>
        <StyledText content="Add message" color="white" />
      </Button>
    </Container>
  );
};
