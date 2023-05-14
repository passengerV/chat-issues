import React, {memo, useMemo} from 'react';
import {Container, StyledText} from './styles';
import {ChatMessage} from '../../shared';
import {getEnteringAnimation} from './getEnteringAnimation';
import {getRandomWidth} from '../../utils';

const MIN_WIDTH = 30;
const MAX_WIDTH = 90;

interface Props {
  message: ChatMessage;
  parentInitializedAt?: number;
}

export const Message: React.FC<Props> = memo(
  ({message, parentInitializedAt}) => {
    const width = useMemo(() => getRandomWidth(MIN_WIDTH, MAX_WIDTH), []);

    const enteringAnimation = useMemo(
      () => getEnteringAnimation(parentInitializedAt, message?.createdAt),
      [message?.createdAt, parentInitializedAt],
    );

    return (
      <Container entering={enteringAnimation} width={width}>
        <StyledText content={message.text} />
      </Container>
    );
  },
);
