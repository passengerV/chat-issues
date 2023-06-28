import React, {useMemo} from 'react';
import {Knob, ProgressBar, Container} from './styles';
import {AnimatedStyleProp} from 'react-native-reanimated';
import {ViewStyle} from 'react-native';

const HIT_SLOP = {bottom: 10, left: 5, right: 10, top: 10};

interface Props {
  scrollTranslationStyle: AnimatedStyleProp<ViewStyle>;
  progressStyle: AnimatedStyleProp<ViewStyle>;
  isDisabled?: boolean;
  hasBorder?: boolean;
}

export const PlaybackSlider: React.FC<Props> = ({
  isDisabled,
  progressStyle,
  scrollTranslationStyle,
  hasBorder,
}) => {
  const knobPointerEvents = useMemo(
    () => (isDisabled ? 'none' : 'auto'),
    [isDisabled],
  );

  return (
    <Container hasBorder={hasBorder}>
      <ProgressBar style={progressStyle} />
      <Knob
        style={scrollTranslationStyle}
        hitSlop={HIT_SLOP}
        pointerEvents={knobPointerEvents}
      />
    </Container>
  );
};
