import React from 'react';
import {Screen} from '../../components';
import {Content, StyledText} from './styles';

export const LayoutIssueDescriptionScreen: React.FC = () => {
  return (
    <Screen headerTitle="Issue description">
      <Content>
        <StyledText content="In this example there are no issues with the behavior, so it is as expected." />
        <StyledText content="What may cause previously added content to not respect the layout animation defined on the flatList and behave like it is not defined on that portion of view? Newly added items will animate, but pre-rendered won't." />
      </Content>
    </Screen>
  );
};
