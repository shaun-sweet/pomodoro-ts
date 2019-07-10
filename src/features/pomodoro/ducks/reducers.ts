import initialState from './initialState';
import * as types from './types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

const pomodoroReducer = (
  state: typeof initialState = initialState,
  action: ActionType<typeof actions>
): typeof initialState => {
  switch (action.type) {
    case types.DECREMENT_TIMER:
      const newTimeRemainingInMs = state.timeRemainingInMs - 100;
      return { ...state, timeRemainingInMs: newTimeRemainingInMs };
    case types.START_TIMER:
      return { ...state, isTimerTicking: true };
    default:
      return state;
  }
};

const reducer = pomodoroReducer;

export default reducer;
