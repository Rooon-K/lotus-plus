import type { CSSProperties, Component, ComponentInternalInstance, VNode } from "vue";

export const NotificationTypes = ["info", "success", "warning", "error"] as const;

export type NotificationType = (typeof NotificationTypes)[number];

export const NotificationPositions = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left"
] as const;
export type NotificationPosition = (typeof NotificationPositions)[number];

export interface NotificationConfig {
  id: string;
  title?: string | VNode | (() => VNode);
  content?: string | VNode | (() => VNode);
  type?: NotificationType;
  duration?: number;
  position: NotificationPosition;
  showClose?: boolean;
  transitionName?: string;
  icon?: string | Component;
  styles?: CSSProperties;
  zIndex?: number;
  offset?: number;
  onClose?: () => void;
  onDestroy: () => void;
}

export interface NotificationInstance {
  id: string;
  vnode: VNode;
  props: NotificationConfig;
  vm: ComponentInternalInstance;
  handler: NotificationHandler;
}

export type CreateNotificationConfig = Omit<NotificationConfig, "onDestroy" | "zIndex">;

export type NotificationHandler = {
  close: () => void;
};

export type NotificationOptions = Partial<NotificationConfig>;
export type NotificationParams = string | VNode | NotificationOptions;

export type NotifyFn = {
  (config: NotificationParams): void;
  closeAll(type?: NotificationType): void;
};

export interface Notify extends NotifyFn {
  info: NotifyFn;
  success: NotifyFn;
  warning: NotifyFn;
  error: NotifyFn;
}

export type NotificationQueue = NotificationInstance[];
