import type { Component, ComponentInternalInstance, VNode } from "vue";

export const messageTypes = ["info", "success", "warning", "error", "loading"] as const;
export type MessageType = (typeof messageTypes)[number];

export interface MessageConfig {
  id: string;
  message?: string | VNode | (() => VNode);
  type?: MessageType;
  icon?: string | Component;
  duration?: number;
  showClose?: boolean;
  transitionName?: string;
  zIndex: number;
  offset?: number;
  onClose?: () => void;
  onDestroy: () => void;
}

export interface MessageHandler {
  close: () => void;
}

export type MessageOptions = Partial<MessageConfig>;
export type MessageParams = string | VNode | MessageOptions;

export type MessageFn = {
  (config: MessageParams): MessageHandler;
  closeAll(type?: MessageType): void;
};

export type MessageTypeFn = (config: MessageParams) => MessageHandler;

export interface Message extends MessageFn {
  info: MessageTypeFn;
  success: MessageTypeFn;
  warning: MessageTypeFn;
  error: MessageTypeFn;
  loading: MessageTypeFn;
}

export interface MessageInstance {
  id: string;
  vnode: VNode;
  props: MessageConfig;
  vm: ComponentInternalInstance;
  handler: MessageHandler;
}

export type CreateMessageConfig = Omit<MessageConfig, "onDestroy" | "zIndex">;
