const M = {
  CODE_WINDOW_CHANGES: Object.freeze(
    [
      "BG_COLOR",
      "EDITOR_FONT_CHANGED",
      "EDITOR_FONT_SIZE_INCREASED",
      "EDITOR_LINES_INCREASED",
      "EDITOR_LINES_TOGGLED",
      "HORIZONTAL_PADDING",
      "LANGUAGE",
      "SHADOW_ALPHA",
      "SHADOW_OFFSET_X",
      "SHADOW_OFFSET_Y",
      "SHADOW_TOGGLED",
      "THEME",
      "TITLEBAR",
      "VERTICAL_PADDING"
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
