import {isAfter} from 'date-fns';
import {SlideInDown} from 'react-native-reanimated';

export const getEnteringAnimation = (
  parentInitializedAt?: number,
  messageCreatedAt?: number | Date,
) => {
  if (!parentInitializedAt || !messageCreatedAt) {
    return undefined;
  }

  const isEnteringAnimationVisible = isAfter(
    messageCreatedAt,
    parentInitializedAt,
  );

  return isEnteringAnimationVisible ? SlideInDown : undefined;
};
