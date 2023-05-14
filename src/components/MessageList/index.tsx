import {ChatMessage} from '../../shared';
import React, {useCallback, memo, useRef} from 'react';
import {ListRenderItem, ListRenderItemInfo} from 'react-native';
import {Message} from '../Message';
import {Container} from './styles';
import {useAppSelector} from '../../hooks';
import {selectMessagesList} from '../../features/chat';
import Animated, {Layout} from 'react-native-reanimated';

const SCROLL_EVENT_THROTTLE = 1000;
const LAYOUT_MASS = 100;

const keyExtractor = (element: ChatMessage) => element._id;

export const MessageList: React.FC = memo(() => {
  const listRef = useRef<any>(null);
  const messages = useAppSelector(selectMessagesList);
  const initializedAt = useRef<number>(new Date().getTime());

  const renderItem: ListRenderItem<ChatMessage> = useCallback(
    ({item: message}: ListRenderItemInfo<ChatMessage>) => {
      return (
        <Message
          message={message}
          parentInitializedAt={initializedAt.current}
        />
      );
    },
    [],
  );

  return (
    <Container>
      <Animated.FlatList
        inverted
        ref={listRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={SCROLL_EVENT_THROTTLE}
        itemLayoutAnimation={Layout.mass(LAYOUT_MASS)}
      />
    </Container>
  );
});
