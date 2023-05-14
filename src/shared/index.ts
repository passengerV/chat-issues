export * from './navigation';
import {store} from '../store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export interface ChatMessage {
  _id: string;
  text?: string;
  createdAt: Date | number;
}

export const EMPTY_ARRAY = [];
export const ENTERING_ANIMATION_CHAT_ID = '0';
export const LAYOUT_ANIMATION_CHAT_ID = '1';
