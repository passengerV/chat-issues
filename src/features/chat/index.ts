import {addChatMessage} from './utils';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, ChatMessage, EMPTY_ARRAY} from '../../shared';
import {ChatState} from './types';
import {initialState} from './initialState';

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addNewMessage: (state, action: PayloadAction<ChatMessage>) => {
      addChatMessage(state, action.payload);
    },
    setConversationId: (
      state,
      {payload: conversationId}: PayloadAction<string>,
    ) => {
      state.currentConversationId = conversationId;
    },
  },
});

const {reducer} = chatSlice;

export const {addNewMessage, setConversationId} = chatSlice.actions;

export const selectMessages = (state: RootState): ChatState => state.chat;

export const selectMessagesList = (state: RootState): ChatMessage[] => {
  return (
    selectMessages(state)?.conversations?.find(
      conversation => conversation.id === state.chat.currentConversationId,
    )?.messages || EMPTY_ARRAY
  );
};

export default reducer;
