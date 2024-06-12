export default {
  createElement(type: any, attributes = {}, ...children: any[]) {
    const el: HTMLElement = document.createElement(type);
    this.setAttributes(el, attributes);

    el.append(...children);

    return el as HTMLElement;
  },
  setAttributes(el: HTMLElement, attributes: any) {
    if (attributes) {
      for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
          const value = attributes[key];
          if (value !== undefined) {
            el.setAttribute(key, value);
          }
        }
      }
    }
  }
};
