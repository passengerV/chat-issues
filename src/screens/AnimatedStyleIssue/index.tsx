import React from 'react';
import {CustomText, PlaybackSlider, Screen} from '../../components';
import {Button, Content, PlaybackContainer} from './styles';
import {useAnimations} from './useAnimations';

const duration = 20 * 1000;

export const AnimatedStyleIssueScreen: React.FC = () => {
  const {progressStyle, scrollTranslationStyle, startAnimation} =
    useAnimations(duration);

  return (
    <Screen headerTitle="Animated style issue">
      <Content>
        <PlaybackContainer>
          <PlaybackSlider
            isDisabled={duration < 0}
            progressStyle={progressStyle}
            scrollTranslationStyle={scrollTranslationStyle}
            hasBorder
          />
        </PlaybackContainer>
        <Button>
          <CustomText content="Start animation" onPress={startAnimation} />
        </Button>
      </Content>
    </Screen>
  );
};
