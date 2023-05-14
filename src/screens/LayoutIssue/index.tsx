import React, {useCallback} from 'react';
import {Composer, MessageList, Screen} from '../../components';
import {Content} from './styles';
import {NavigationProps, NavigationRoutes} from '../../shared';
import {useNavigation} from '@react-navigation/native';

const {LAYOUT_ANIMATION_ISSUE_DESCRIPTION} = NavigationRoutes;

export const LayoutIssueScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleOnInfoPress = useCallback(() => {
    navigate(LAYOUT_ANIMATION_ISSUE_DESCRIPTION);
  }, [navigate]);

  return (
    <Screen
      headerTitle="FlatList Layout Animation issue"
      onInfoPress={handleOnInfoPress}>
      <Content>
        <MessageList />
        <Composer />
      </Content>
    </Screen>
  );
};
