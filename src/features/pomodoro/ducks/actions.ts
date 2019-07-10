import { action } from 'typesafe-actions';
import { DECREMENT_TIMER, START_TIMER } from './types';

export const incrementTimer = () => action(DECREMENT_TIMER);

export const startTimer = () => action(START_TIMER);
