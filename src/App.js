import React from "react";

import { VBox } from "./components/Containers";
import CodeWindow from "./components/editor";
import Spacer from "./components/Spacer";
import SettingsTabs from "./components/tabs";
import Screenshot from "./components/Screenshot";
import CodeWindowEvents from "./CodeWindowEvents";

import "./css/index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const defaultTheme = "default";

    this.state = {
      editorExtraThemes: [],
      editorFont: "Fira code",
      editorFontSize: 20,
      editorLanguage: "javascript",
      editorLineHeight: 1,
      editorTheme: defaultTheme,
      titlebarTheme: "macos-left-tb",
      showLineNumbers: true,
      showWindowDropShadow: true,
      windowBgColor: "#1565c0",
      windowDropShadowOffsetX: 1,
      windowDropShadowOffsetY: 2,
      windowDropShadowAlpha: 20,
      windowPaddingV: 5,
      windowPaddingH: 5
    };

    updateTheme(defaultTheme);
  }

  render() {
    const spacerAmount = "2em";

    return (
      <VBox centered={true}>
        <h1 id="header">Scratchpad</h1>

        <Spacer amount={spacerAmount} />

        <CodeWindow
          dropShadowOffsets={{
            x: this.state.windowDropShadowOffsetX,
            y: this.state.windowDropShadowOffsetY
          }}
          dropShadowAlpha={this.state.windowDropShadowAlpha}
          editorFont={this.state.editorFont}
          editorFontSize={this.state.editorFontSize}
          editorLanguage={this.state.editorLanguage}
          editorLineHeight={this.state.editorLineHeight}
          editorTheme={this.state.editorTheme}
          showDropShadow={this.state.showWindowDropShadow}
          showEditorLineNumbers={this.state.showLineNumbers}
          titlebarTheme={this.state.titlebarTheme}
          windowBgColor={this.state.windowBgColor}
          windowPadding={{
            x: this.state.windowPaddingH,
            y: this.state.windowPaddingV
          }}
          handleCodeChange={() => {}}
        />

        <Spacer amount={spacerAmount} />

        <Screenshot />

        <Spacer amount={spacerAmount} />

        <SettingsTabs
          selectedLanguage={this.state.editorLanguage}
          selectedTheme={this.state.editorTheme}
          handleCodeWindowChanges={this.handleChanges}
          windowBgColor={this.state.windowBgColor}
        />
      </VBox>
    );
  }

  handleLanguageChange = newLanguage => {
    newLanguage = newLanguage.toLowerCase();
    if (this.state.editorLanguage !== newLanguage) {
      this.setState({ editorLanguage: newLanguage });
    }
  };

  handleThemeChange = theme => {
    theme = theme.toLowerCase();

    const updatedTheme = theme.slice().replace(/ /g, "-");

    if (this.state.editorTheme === updatedTheme) {
      return;
    }

    updateTheme(updatedTheme);

    this.setState({
      editorTheme: theme
    });
  };

  handleChanges = (change, value) => {
    const { CODE_WINDOW_CHANGES } = CodeWindowEvents;
    let field;

    switch (change) {
      case CODE_WINDOW_CHANGES.LANGUAGE:
        this.handleLanguageChange(value);
        return;
      case CODE_WINDOW_CHANGES.THEME:
        this.handleThemeChange(value);
        return;
      case CODE_WINDOW_CHANGES.VERTICAL_PADDING:
        field = "windowPaddingV";
        break;
      case CODE_WINDOW_CHANGES.HORIZONTAL_PADDING:
        field = "windowPaddingH";
        break;
      case CODE_WINDOW_CHANGES.SHADOW_OFFSET_X:
        field = "windowDropShadowOffsetX";
        break;
      case CODE_WINDOW_CHANGES.SHADOW_OFFSET_Y:
        field = "windowDropShadowOffsetY";
        break;
      case CODE_WINDOW_CHANGES.SHADOW_ALPHA:
        field = "windowDropShadowAlpha";
        break;
      case CODE_WINDOW_CHANGES.SHADOW_TOGGLED:
        field = "showWindowDropShadow";
        break;
      case CODE_WINDOW_CHANGES.EDITOR_LINES_INCREASED:
        field = "editorLineHeight";
        break;
      case CODE_WINDOW_CHANGES.EDITOR_LINES_TOGGLED:
        field = "showLineNumbers";
        break;
      case CODE_WINDOW_CHANGES.EDITOR_FONT_SIZE_INCREASED:
        field = "editorFontSize";
        break;
      case CODE_WINDOW_CHANGES.TITLEBAR:
        field = "titlebarTheme";
        break;
      case CODE_WINDOW_CHANGES.EDITOR_FONT_CHANGED:
        field = "editorFont";
        break;
      case CODE_WINDOW_CHANGES.BG_COLOR:
        field = "windowBgColor";
        break;

      default:
        console.error("Unexpected change!:\n", value);
        return;
    }

    this.setState({ [field]: value });
  };
}

function updateTheme(theme) {
  document.head.querySelectorAll("link").forEach(link => {
    if (link.dataset.id === "editor-theme") {
      link.remove();
      return;
    }
  });

  const style = document.createElement("link");
  style.dataset.id = "editor-theme";
  style.href = `/styles/${theme}.css`;
  style.rel = "stylesheet";
  style.async = true;

  document.head.appendChild(style);
}
