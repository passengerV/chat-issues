import {LAYOUT_ANIMATION_CHAT_ID} from '../../shared';
import {ChatState} from './types';

export const initialState: ChatState = {
  currentConversationId: undefined,
  conversations: [
    {
      id: LAYOUT_ANIMATION_CHAT_ID,
      messages: [
        {
          _id: 'message_15',
          createdAt: 1684062514778,
          text: 'Message 15',
        },
        {
          _id: 'message_14',
          createdAt: 1684061734710,
          text: 'Message 14',
        },
        {
          _id: 'message_13',
          createdAt: 1684062514437,
          text: 'Message 13',
        },
        {
          _id: 'message_12',
          createdAt: 1684062882329,
          text: 'Message 12',
        },
        {
          _id: 'message_11',
          createdAt: 1684062513254,
          text: 'Message 11',
        },
        {
          _id: 'message_10',
          createdAt: 1684062514075,
          text: 'Message 10',
        },
        {
          _id: 'message_9',
          createdAt: 1684062514437,
          text: 'Message 9',
        },
        {
          _id: 'message_8',
          createdAt: 1684061734710,
          text: 'Message 8',
        },
        {
          _id: 'message_7',
          createdAt: 1684062514778,
          text: 'Message 7',
        },
        {
          _id: 'message_6',
          createdAt: 1684062515237,
          text: 'Message 6',
        },
        {
          _id: 'message_5',
          createdAt: 1684062515733,
          text: 'Message 5',
        },
        {
          _id: 'message_4',
          createdAt: 1684062516232,
          text: 'Message 4',
        },
        {
          _id: 'message_3',
          createdAt: 1684062516715,
          text: 'Message 3',
        },
        {
          _id: 'message_2',
          createdAt: 1684061734710,
          text: 'Message 2',
        },
        {
          _id: 'message_1',
          createdAt: 1684061733206,
          text: 'Message 1',
        },
        {
          _id: 'message_0',
          createdAt: 1684061731698,
          text: 'Message 0',
        },
      ],
    },
  ],
};
