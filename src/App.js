import React from "react";

import { VBox } from "./components/Containers";
import CodeWindow from "./components/editor";
import Spacer from "./components/Spacer";
import SettingsTabs from "./components/tabs";
import Screenshot from "./components/Screenshot";

import "./css/index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorCode: `function doSomething() console.log("Hello World");`,
      editorExtraThemes: [],
      editorFont: '"Fira code", "Fira Mono", monospace',
      editorFontSize: 1.2,
      editorLanguage: "javascript",
      editorLineHeight: 1.2,
      editorTheme: "light",
      titlebarTheme: "macos-left-tb",
      showLineNumbers: true,
      showWindowDropShadow: true,
      windowBgColor: "#1565c0",
      windowDropShadowOffsets: { x: 0, y: 2 },
      windowPadding: { x: 5, y: 5 }
    };
  }

  handleCodeChange = code => {
    this.setState({ editorCode: code });
  };

  handleLanguageChange = event => {
    const newLanguage = event.target.innerText.toLowerCase();
    if (this.state.editorLanguage !== newLanguage) {
      this.setState({ editorLanguage: newLanguage });
    }
  };

  handleThemeChange = event => {
    const newTheme = event.target.innerText.toLowerCase();
    if (this.state.editorTheme !== newTheme) {
      this.setState({ editorTheme: newTheme });
    }
  };

  render() {
    const spacerAmount = "2em";
    return (
      <VBox centered={true}>
        <h1 id="header">Scratchpad</h1>

        <Spacer amount={spacerAmount} />

        <CodeWindow
          dropShadowOffsets={this.state.windowDropShadowOffsets}
          editorCode={this.state.editorCode}
          editorFont={this.state.editorFont}
          editorFontSize={this.state.editorFontSize}
          editorLanguage={this.state.editorLanguage}
          editorLineHeight={this.state.editorLineHeight}
          editorTheme={this.state.editorTheme}
          handleCodeChange={this.handleCodeChange}
          showDropShadow={this.state.showWindowDropShadow}
          showEditorLineNumbers={this.state.showLineNumbers}
          titlebarTheme={this.state.titlebarTheme}
          windowBgColor={this.state.windowBgColor}
          windowPadding={this.state.windowPadding}
        />

        <Spacer amount={spacerAmount} />

        <Screenshot />

        <Spacer amount={spacerAmount} />

        <SettingsTabs
          selectedLanguage={this.state.editorLanguage}
          handleLanguageChange={this.handleLanguageChange}
          selectedTheme={this.state.editorTheme}
          handleThemeChange={this.handleThemeChange}
        />
      </VBox>
    );
  }
}
