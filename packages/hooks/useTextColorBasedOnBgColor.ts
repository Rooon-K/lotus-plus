export default function useTextColorBasedOnBgColor(el: HTMLElement) {
  const backgroundColor = window.getComputedStyle(el).backgroundColor;
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/;
  const matches = backgroundColor.match(regex);

  if (!matches) {
    throw new Error("无效的颜色格式");
  }

  const r = parseInt(matches[1]);
  const g = parseInt(matches[2]);
  const b = parseInt(matches[3]);
  const a = matches[4] ? parseFloat(matches[4]) : 1;

  const brightness = Math.round((0.299 * r + 0.587 * g + 0.114 * b) / a);

  el.style.setProperty("color", brightness > 128 ? "black" : "white");
}
