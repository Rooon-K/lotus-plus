import { LMessage } from "@lotus-plus/components";

export default async function useTextCopy(text: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    LMessage.success("复制成功");
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    const textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      LMessage.success("复制成功");
      document.execCommand("copy");
    } catch (ex) {
      LMessage.error("复制失败");
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    LMessage.error("不兼容的浏览器");
  }
}
