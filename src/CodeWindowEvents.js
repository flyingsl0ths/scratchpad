const M = {
  CODE_WINDOW_CHANGES: Object.freeze(
    [
      "LANGUAGE",
      "THEME",
      "VERTICAL_PADDING",
      "HORIZONTAL_PADDING",
      "SHADOW_OFFSET_X",
      "SHADOW_OFFSET_Y",
      "SHADOW_ALPHA",
      "SHADOW_TOGGLED",
      "TITLEBAR",
      "EDITOR_LINES_INCREASED",
      "EDITOR_LINES_TOGGLED",
      "EDITOR_FONT_SIZE_INCREASED",
      "EDITOR_FONT_CHANGED",
      "BG_COLOR"
    ].reduce((obj, v, i) => {
      obj[v] = i + 1;
      return obj;
    }, {})
  ),

  withEventChange(event_id, f) {
    return val => f(event_id, val);
  }
};

export default M;
