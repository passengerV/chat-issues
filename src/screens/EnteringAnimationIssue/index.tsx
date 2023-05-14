import React, {useCallback} from 'react';
import {Composer, MessageList, Screen} from '../../components';
import {Content} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, NavigationRoutes} from '../../shared';

const {ENTERING_ANIMATION_ISSUE_DESCRIPTION} = NavigationRoutes;

export const EnteringAnimationIssueScreen: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const handleOnInfoPress = useCallback(() => {
    navigate(ENTERING_ANIMATION_ISSUE_DESCRIPTION);
  }, [navigate]);

  return (
    <Screen
      headerTitle="Entering animation issue"
      onInfoPress={handleOnInfoPress}>
      <Content>
        <MessageList />
        <Composer />
      </Content>
    </Screen>
  );
};
