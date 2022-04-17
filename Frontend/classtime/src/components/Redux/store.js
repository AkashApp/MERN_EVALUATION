import {createStore} from 'redux';
import { scheduleReducer } from './reducer';

export const store= createStore(scheduleReducer);