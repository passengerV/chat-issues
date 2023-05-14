import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const NavigationRoutes = {
  OVERVIEW: 'overview',
  ENTERING_ANIMATION_ISSUE: 'entering-animation-issue',
  ENTERING_ANIMATION_ISSUE_DESCRIPTION: 'entering-animation-issue-description',
  LAYOUT_ANIMATION_ISSUE: 'layout-animation-issue',
  LAYOUT_ANIMATION_ISSUE_DESCRIPTION: 'layout-animation-issue-description',
} as const;

const {
  OVERVIEW,
  ENTERING_ANIMATION_ISSUE,
  LAYOUT_ANIMATION_ISSUE,
  ENTERING_ANIMATION_ISSUE_DESCRIPTION,
  LAYOUT_ANIMATION_ISSUE_DESCRIPTION,
} = NavigationRoutes;

export type NavigatorParams = {
  [OVERVIEW]: undefined;
  [ENTERING_ANIMATION_ISSUE]: undefined;
  [ENTERING_ANIMATION_ISSUE_DESCRIPTION]: undefined;
  [LAYOUT_ANIMATION_ISSUE]: undefined;
  [LAYOUT_ANIMATION_ISSUE_DESCRIPTION]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<NavigatorParams>;
