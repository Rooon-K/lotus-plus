import { each, findIndex, isFunction, isString, set } from "lodash-es";
import NotificationConstructor from "./Notification.vue";
import {
  NotificationTypes,
  type CreateNotificationConfig,
  type NotificationConfig,
  type NotificationHandler,
  type NotificationInstance,
  type NotificationParams,
  type NotificationQueue,
  type NotificationType,
  type Notify,
  type NotifyFn
} from "./types";
import { h, isVNode, render } from "vue";
import { useZIndex } from "@lotus-plus/hooks";
const { nextZIndex } = useZIndex();

const notifications: Record<NotificationConfig["position"], NotificationQueue> = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
};

const GAP_SIZE = 16;
let seed = 1;

const notificationDefault = {
  type: "info",
  duration: 3000,
  offset: 10,
  transitionName: "fade-up"
} as const;

const normalizeOptions = (options: NotificationParams): CreateNotificationConfig => {
  const result =
    !options || isVNode(options) || isString(options) || isFunction(options)
      ? { content: options }
      : options;
  return {
    ...notificationDefault,
    ...result
  } as CreateNotificationConfig;
};

const createNotify = (props: CreateNotificationConfig): NotificationInstance => {
  const id = props.id ?? `notification-${seed++}`;
  const container = document.createElement("div");
  const position = props.position || "top-right";

  let verticalOffset = props.offset || 10;
  notifications[position].forEach(
    (item) => (verticalOffset += (item.vnode?.el?.offsetHeight || 0) + GAP_SIZE)
  );
  verticalOffset += GAP_SIZE;

  const _props = {
    ...props,
    id,
    offset: verticalOffset,
    position,
    zIndex: nextZIndex(),
    onDestroy: () => render(null, container),
    onClose: () => close(id, position)
  };

  const vnode = h(NotificationConstructor, _props);
  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const handler: NotificationHandler = {
    close: () => close(id, position)
  };

  const instance: NotificationInstance = {
    props: _props,
    id,
    vm,
    vnode,
    handler
  };

  notifications[position].push(instance);

  return instance;
};

export const updateNotification = (id: string, options: Partial<NotificationConfig>) => {
  const position = options.position || "top-right";
  const idx = findIndex(notifications[position], { id });
  if (idx === -1) {
    options.id = id;
    return createNotify(options as CreateNotificationConfig);
  } else {
    const instance = notifications[position][idx];

    options.offset = instance.props.offset;

    const props = {
      ...instance.props,
      ...options
    };

    Object.assign(instance.vm.props, props);
    return instance;
  }
};

export const notify: NotifyFn & Partial<Notify> = (options = {}) => {
  const normalized = normalizeOptions(options);
  let instance;

  setTimeout(() => {
    if (normalized.id) {
      instance = updateNotification(normalized.id, normalized);
    } else {
      instance = createNotify(normalized);
    }

    instance!.vm.exposed!.startTimer();
    const el = instance!.vnode.el!;
    el.addEventListener("onmouseenter", instance!.vm.exposed!.clearTimer);
    el.addEventListener("onmouseleave", instance!.vm.exposed!.startTimer);

    return instance!.handler;
  });
};

export const closeAll = (type?: NotificationType) => {
  each(Object.values(notifications), (queue) => {
    queue.forEach((instance) => {
      if (type) {
        instance.props.type === type && instance.vm.exposed!.close();
        return;
      }
      instance.vm.exposed!.close();
    });
  });
};

export function close(id: string, position: NotificationConfig["position"]) {
  const orientedNotifications = notifications[position];
  const idx = findIndex(orientedNotifications, { id });
  if (idx === -1) return;
  const instance = orientedNotifications[idx];

  const removedHeight = instance.vnode.el!.offsetHeight;
  const verticalPos = position.split("-")[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;

  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const { el, component } = orientedNotifications[i].vnode;
    const pos = Number.parseInt(el!.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    component!.props.offset = pos;
  }
}

each(NotificationTypes, (type) => {
  set(notify, type, (options: NotificationParams) => {
    const normalized = normalizeOptions(options);
    return notify({ ...normalized, type });
  });
});

notify.closeAll = closeAll;

export default notify as Notify;
