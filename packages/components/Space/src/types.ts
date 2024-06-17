export type SpaceSize = number | "mini" | "small" | "medium" | "large";

export interface SpaceProps {
  align?: "start" | "end" | "baseline" | "center";
  direction?: "vertical" | "horizontal";
  size?: SpaceSize;
  wrap?: boolean;
}
