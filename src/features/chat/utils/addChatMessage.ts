import {ChatMessage} from '../../../shared';
import {Conversation, ChatState} from '../types';

export const addChatMessage = (
  state: ChatState,
  message: ChatMessage,
): void => {
  if (!state.currentConversationId) {
    return;
  }

  const conversation = state.conversations.find(
    x => x.id === state.currentConversationId,
  );

  if (conversation) {
    conversation?.messages.unshift(message);
    return;
  }

  const newConversation: Conversation = {
    id: state.currentConversationId,
    messages: [message],
  };

  state.conversations.push(newConversation);
};
