import chatReducer from '../features/chat';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  chat: chatReducer,
});
