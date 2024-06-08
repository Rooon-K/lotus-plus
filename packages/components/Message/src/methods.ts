import { h, isVNode, render, shallowReactive } from "vue";
import MessageConstructor from "./Message.vue";
import {
  messageTypes,
  type CreateMessageConfig,
  type Message,
  type MessageFn,
  type MessageHandler,
  type MessageInstance,
  type MessageParams,
  type MessageType
} from "./types";
import { useZIndex } from "@lotus-plus/hooks";
import { each, findIndex, get, isFunction, isString, set } from "lodash-es";

let seed = 0;
const instances: MessageInstance[] = shallowReactive([]);
const { nextZIndex } = useZIndex();

export const messageDefaults = {
  type: "info",
  duration: 3000,
  offset: 10,
  transitionName: "fade-up"
} as const;

const normalizeOptions = (options: MessageParams): CreateMessageConfig => {
  const result =
    !options || isVNode(options) || isString(options) || isFunction(options)
      ? { message: options }
      : options;
  return {
    ...messageDefaults,
    ...result
  } as CreateMessageConfig;
};

const createMessage = (props: CreateMessageConfig): MessageInstance => {
  const id = props.id ?? `message_${seed++}`;
  const container = document.createElement("div");
  const destroy = () => {
    const idx = findIndex(instances, { id });
    if (idx === -1) return;

    instances.splice(idx, 1);

    render(null, container);
  };

  const _props = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy
  };

  const vnode = h(MessageConstructor, _props);

  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const handler: MessageHandler = {
    close: () => vm.exposed!.close()
  };

  const instance: MessageInstance = {
    props: _props,
    id,
    vm,
    vnode,
    handler
  };
  instances.push(instance);

  return instance;
};

export const updateMessage = (id: string, options: CreateMessageConfig) => {
  const idx = findIndex(instances, { id });

  if (idx === -1) {
    options.id = id;
    return createMessage(options);
  } else {
    const instance = instances[idx];
    const props = {
      ...instance.props,
      ...options
    };
    Object.assign(instance.vm.props, props);

    return instance;
  }
};

export const message: MessageFn & Partial<Message> = (options = {}) => {
  const normalized = normalizeOptions(options);
  let instance;
  if (normalized.id) {
    instance = updateMessage(normalized.id, normalized);
  } else {
    instance = createMessage(normalized);
  }

  instance!.vm.exposed!.startTimer();
  const el = instance!.vnode.el!;
  el.addEventListener("onmouseenter", instance!.vm.exposed!.clearTimer);
  el.addEventListener("onmouseleave", instance!.vm.exposed!.startTimer);
  
  return instance!.handler;
};

export const getLastBottomOffset = (id: string) => {
  const idx = findIndex(instances, { id });
  if (idx <= 0) return 0;

  return get(instances, [idx - 1, "vm", "exposed", "bottomOffset", "value"]);
};

export const closeAll = (type?: MessageType) => {
  each(instances, (instance) => {
    if (type) {
      instance.props.type === type && instance.handler.close();
      return;
    }
    instance.handler.close();
  });
};

each(messageTypes, (type) => {
  set(message, type, (options: MessageParams) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type });
  });
});

message.closeAll = closeAll;

export default message as Message;
