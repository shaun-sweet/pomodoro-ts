import { combineReducers } from 'redux';
import pomodoroReducer from '../features/pomodoro/ducks';

const rootReducer = combineReducers({
  pomodoro: pomodoroReducer
});

export default rootReducer;
