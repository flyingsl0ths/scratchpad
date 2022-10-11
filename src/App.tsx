import React from "react";

import { HBox, VBox } from "./components/Container";
import CodeWindow from "./components/CodeWindow";
import Spacer from "./components/Spacer";
import SettingsTabs from "./components/SettingsTabs";
import ImageLink from "./components/ImageLink";
import Screenshot from "./components/Screenshot";
import { CodeWindowEvents } from "./CodeWindowEvents";
import { THEMES } from "./EditorConstants";
import { Empty, Primitive } from "./Utils";

import "./scss/index.scss";

interface AppState {
  editorExtraThemes: string[];
  editorFont: string;
  editorFontSize: number;
  editorLanguage: string;
  editorLineHeight: number;
  editorTheme: string;
  fileName: string;
  showLineNumbers: boolean;
  showWindowDropShadow: boolean;
  titlebarTheme: string;
  windowBgColor: string;
  windowDropShadowAlpha: number;
  windowDropShadowOffsetX: number;
  windowDropShadowOffsetY: number;
  windowPaddingH: number;
  windowPaddingV: number;
}

export default class App extends React.Component<Empty, AppState> {
  constructor(props: Empty) {
    super(props);

    const defaultTheme = THEMES[3];

    this.state = {
      editorExtraThemes: [],
      editorFont: "Fira code",
      editorFontSize: 21,
      editorLanguage: "javascript",
      editorLineHeight: 1.2,
      editorTheme: defaultTheme,
      fileName: "",
      showLineNumbers: true,
      showWindowDropShadow: true,
      titlebarTheme: "macos",
      windowBgColor: "#1565c0",
      windowDropShadowAlpha: 20,
      windowDropShadowOffsetX: 1,
      windowDropShadowOffsetY: 2,
      windowPaddingH: 5,
      windowPaddingV: 5
    };

    updateTheme(defaultTheme);
  }

  render() {
    const spacerAmount = "2em";

    return (
      <VBox centered={true}>
        <HBox centered={true}>
          <h1 id="header">Scratchpad</h1>
          <ImageLink
            id="project-link"
            imageDescription="Github logo"
            image="/github.png"
            url="https://github.com/flyingsl0ths/scratchpad"
          />
        </HBox>

        <Spacer amount={spacerAmount} />

        <CodeWindow
          dropShadowAlpha={this.state.windowDropShadowAlpha}
          dropShadowOffsets={{
            x: this.state.windowDropShadowOffsetX,
            y: this.state.windowDropShadowOffsetY
          }}
          editorFontSize={this.state.editorFontSize}
          editorFont={this.state.editorFont}
          editorLanguage={this.state.editorLanguage}
          editorLineHeight={this.state.editorLineHeight}
          editorTheme={this.state.editorTheme}
          fileName={this.state.fileName}
          showDropShadow={this.state.showWindowDropShadow}
          showEditorLineNumbers={this.state.showLineNumbers}
          titlebarTheme={this.state.titlebarTheme}
          windowBgColor={this.state.windowBgColor}
          windowPadding={{
            x: this.state.windowPaddingH,
            y: this.state.windowPaddingV
          }}
        />

        <Spacer amount={spacerAmount} />

        <Screenshot
          onFileNameChange={this.handleFileNameChange}
          targetId="code-window-bg"
        />

        <Spacer amount={spacerAmount} />

        <SettingsTabs
          onCodeWindowChange={this.handleCodeWindowChanges}
          selectedLanguage={this.state.editorLanguage}
          selectedTheme={this.state.editorTheme}
          windowBgColor={this.state.windowBgColor}
        />
      </VBox>
    );
  }

  private handleFileNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const cutOff = 20;
    const fileName: string = event.target.value;
    this.setState({
      fileName: fileName.length <= cutOff ? fileName : fileName.slice(0, cutOff)
    });
  };

  private handleLanguageChange = (newLanguage: string): void => {
    newLanguage = newLanguage.toLowerCase();
    if (this.state.editorLanguage !== newLanguage) {
      this.setState({ editorLanguage: newLanguage });
    }
  };

  private handleThemeChange = (theme: string): void => {
    theme = theme.toLowerCase();

    const updatedTheme = theme.slice().replace(/\s/g, "-");

    if (this.state.editorTheme === updatedTheme) {
      return;
    }

    updateTheme(updatedTheme);

    this.setState({
      editorTheme: theme
    });
  };

  private handleCodeWindowChanges = (
    change: CodeWindowEvents,
    value: Primitive
  ): void => {
    switch (change) {
      case CodeWindowEvents.THEME:
        this.handleThemeChange(value as string);
        return;
      case CodeWindowEvents.LANGUAGE:
        this.handleLanguageChange(value as string);
        return;
      case CodeWindowEvents.EDITOR_FONT_CHANGED:
        this.setState({ editorFont: value as string });
        break;
      case CodeWindowEvents.BG_COLOR:
        this.setState({ windowBgColor: value as string });
        break;
      case CodeWindowEvents.TITLEBAR:
        this.setState({ titlebarTheme: value as string });
        break;
      case CodeWindowEvents.EDITOR_FONT_SIZE_INCREASED:
        this.setState({ editorFontSize: value as number });
        break;
      case CodeWindowEvents.VERTICAL_PADDING:
        this.setState({ windowPaddingV: value as number });
        break;
      case CodeWindowEvents.HORIZONTAL_PADDING:
        this.setState({ windowPaddingH: value as number });
        break;
      case CodeWindowEvents.SHADOW_OFFSET_X:
        this.setState({ windowDropShadowOffsetY: value as number });
        break;
      case CodeWindowEvents.SHADOW_OFFSET_Y:
        this.setState({ windowDropShadowOffsetX: value as number });
        break;
      case CodeWindowEvents.SHADOW_ALPHA:
        this.setState({ windowDropShadowAlpha: value as number });
        break;
      case CodeWindowEvents.SHADOW_TOGGLED:
        this.setState({ showWindowDropShadow: value as boolean });
        break;
      case CodeWindowEvents.EDITOR_LINES_INCREASED:
        this.setState({ editorLineHeight: value as number });
        break;
      case CodeWindowEvents.EDITOR_LINES_TOGGLED:
        this.setState({ showLineNumbers: value as boolean });
        break;
      default:
        console.error("Unexpected change!:\n", value);
        return;
    }
  };
}

function updateTheme(theme: string): void {
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

  document.head.appendChild(style);
}
