import {ChatMessage} from '../../shared';
import uuid from 'react-native-uuid';

export const getNewMessage = (content: number): ChatMessage => {
  return {
    _id: `${uuid.v4()}`,
    createdAt: new Date().getTime(),
    text: `Message ${content}`,
  };
};
