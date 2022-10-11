import { Primitive } from "./Utils";

export const enum CodeWindowEvents {
  BG_COLOR,
  EDITOR_FONT_CHANGED,
  EDITOR_FONT_SIZE_INCREASED,
  EDITOR_LINES_INCREASED,
  EDITOR_LINES_TOGGLED,
  HORIZONTAL_PADDING,
  LANGUAGE,
  SHADOW_ALPHA,
  SHADOW_OFFSET_X,
  SHADOW_OFFSET_Y,
  SHADOW_TOGGLED,
  THEME,
  TITLEBAR,
  VERTICAL_PADDING
}

export function withChange<T>(
  event: CodeWindowEvents,
  f: (event: CodeWindowEvents, value: T) => void
): (value: T) => void {
  return value => f(event, value);
}

export type EventChange<T> = (value: T) => void;

export type CodeWindowChange = (
  codeWindowEvent: CodeWindowEvents,
  value: Primitive
) => void;
