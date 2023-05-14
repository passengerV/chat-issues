import React from 'react';
import {Screen} from '../../components';
import {Content, StyledText} from './styles';

export const EnteringAnimationIssueDescriptionScreen: React.FC = () => {
  return (
    <Screen headerTitle="Issue description">
      <Content>
        <StyledText content="SlideInDown entering animation works as expected until the content reaches the top of the viewport (in a inverted flatList)." />
        <StyledText
          content="In that moment let's have 10 flatList items filling the whole viewport.
                   Entering animation of the next new item won't stop at expected height boundaries, but will continue and leave the viewport."
        />
        <StyledText content="The strange behavior continues until another 10 + 1 elements are added (so the initially populated viewport is exchanged)." />
      </Content>
    </Screen>
  );
};
