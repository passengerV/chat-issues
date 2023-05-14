import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes, NavigatorParams} from '../shared';
import {
  OverviewScreen,
  EnteringAnimationIssueScreen,
  LayoutIssueScreen,
  LayoutIssueDescriptionScreen,
  EnteringAnimationIssueDescriptionScreen,
} from '../screens';

const Stack = createNativeStackNavigator<NavigatorParams>();
type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;
const {
  OVERVIEW,
  ENTERING_ANIMATION_ISSUE,
  LAYOUT_ANIMATION_ISSUE,
  ENTERING_ANIMATION_ISSUE_DESCRIPTION,
  LAYOUT_ANIMATION_ISSUE_DESCRIPTION,
} = NavigationRoutes;

export const Navigation: React.FC<Partial<StackNavigatorProps>> = ({
  ...props
}) => {
  return (
    <Stack.Navigator
      initialRouteName={OVERVIEW}
      screenOptions={{headerShown: false}}
      {...props}>
      <Stack.Screen name={OVERVIEW} component={OverviewScreen} />
      <Stack.Screen
        name={ENTERING_ANIMATION_ISSUE}
        component={EnteringAnimationIssueScreen}
      />
      <Stack.Screen
        name={ENTERING_ANIMATION_ISSUE_DESCRIPTION}
        component={EnteringAnimationIssueDescriptionScreen}
        options={{presentation: 'fullScreenModal'}}
      />
      <Stack.Screen
        name={LAYOUT_ANIMATION_ISSUE}
        component={LayoutIssueScreen}
      />
      <Stack.Screen
        name={LAYOUT_ANIMATION_ISSUE_DESCRIPTION}
        component={LayoutIssueDescriptionScreen}
        options={{presentation: 'fullScreenModal'}}
      />
    </Stack.Navigator>
  );
};
