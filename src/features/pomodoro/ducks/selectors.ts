import AppTypes from 'AppTypes';

export const getRemainingTime = (state: AppTypes.RootState) =>
  state.pomodoro.timeRemainingInMs;
