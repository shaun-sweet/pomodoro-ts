import React from 'react';
import { TimerWrapper, TimeRemaining } from './Timer.styles';

type OwnProps = {};

const Timer: React.FC<OwnProps> = props => (
  <TimerWrapper>
    <TimeRemaining>15:00</TimeRemaining>
  </TimerWrapper>
);

export default Timer;
