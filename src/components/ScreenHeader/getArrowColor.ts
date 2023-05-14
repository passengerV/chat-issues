import {Theme} from '@emotion/react';

export const getArrowColor = (theme: Theme, isDark?: boolean) => {
  if (!isDark) {
    return theme.colors.foregroundInteractive;
  }

  return theme.colors.foregroundInverted;
};
