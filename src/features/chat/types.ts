import {ChatMessage} from '../../shared';

export type ChatState = {
  currentConversationId?: string;
  conversations: Conversation[];
};

export type Conversation = {
  id: string;
  messages: ChatMessage[];
};
