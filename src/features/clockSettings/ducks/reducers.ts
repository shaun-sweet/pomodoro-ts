import initialState from './initialState';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

type ClockSettingsShape = typeof initialState;

const clockSettingsReducer = (
  state: ClockSettingsShape = initialState,
  action: ActionType<typeof actions>
): ClockSettingsShape => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = clockSettingsReducer;

export default reducer;
