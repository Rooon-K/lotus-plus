
export interface TooltipOptions {
  content: string;
  delay: number;
  disabled: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  trigger: 'hover' | 'click' | 'focus';
}

export interface ElType extends HTMLElement {
  $_disabled: boolean;
  $_tooltipId: string;
  $_content: string;
  $_delay: number;
  $_position: string;
  $_trigger: string;
}