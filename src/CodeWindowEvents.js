const M = {
  CODE_WINDOW_CHANGES: Object.freeze({
    LANGUAGE: 1,
    THEME: 2,
    VERTICAL_PADDING: 3,
    HORIZONTAL_PADDING: 4,
    SHADOW_OFFSET_X: 5,
    SHADOW_OFFSET_Y: 6,
    SHADOW_ALPHA: 7,
    SHADOW_TOGGLED: 8,
    TITLEBAR: 9,
    EDITOR_LINES_INCREASED: 10,
    EDITOR_LINES_TOGGLED: 11,
    EDITOR_FONT_SIZE_INCREASED: 12,
    EDITOR_FONT_CHANGED: 13,
    BG_COLOR: 14
  }),
  withEventChange(event_id, f) {
    return val => f(event_id, val);
  }
};

export default M;
