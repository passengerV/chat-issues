import React, {useCallback} from 'react';
import {Screen} from '../../components';
import {Button, Content, StyledText} from './styles';
import {useNavigation} from '@react-navigation/core';
import {
  ENTERING_ANIMATION_CHAT_ID,
  LAYOUT_ANIMATION_CHAT_ID,
  NavigationProps,
  NavigationRoutes,
} from '../../shared';
import {useAppDispatch} from '../../hooks';
import {setConversationId} from '../../features/chat';

const {ENTERING_ANIMATION_ISSUE, LAYOUT_ANIMATION_ISSUE} = NavigationRoutes;

export const OverviewScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<NavigationProps>();

  const handleOnPressEnteringIssue = useCallback(() => {
    dispatch(setConversationId(ENTERING_ANIMATION_CHAT_ID));
    navigate(ENTERING_ANIMATION_ISSUE);
  }, [dispatch, navigate]);

  const handleOnPressLayoutIssue = useCallback(() => {
    dispatch(setConversationId(LAYOUT_ANIMATION_CHAT_ID));
    navigate(LAYOUT_ANIMATION_ISSUE);
  }, [dispatch, navigate]);

  return (
    <Screen>
      <Content>
        <Button onPress={handleOnPressEnteringIssue}>
          <StyledText content="Entering animation issue" />
        </Button>
        <Button onPress={handleOnPressLayoutIssue}>
          <StyledText content="FlatList Layout issue" />
        </Button>
      </Content>
    </Screen>
  );
};
