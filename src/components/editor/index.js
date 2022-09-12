import React from "react";
import PropTypes from "prop-types";

import TitleBar from "../TitleBar";
import { VBox } from "../Containers";
import CodeEditor from "./CodeEditor";

CodeWindow.propTypes = {
  dropShadowOffsets: PropTypes.object.isRequired,
  editorCode: PropTypes.string.isRequired,
  editorFont: PropTypes.string.isRequired,
  editorFontSize: PropTypes.number.isRequired,
  editorLanguage: PropTypes.string.isRequired,
  editorLineHeight: PropTypes.number.isRequired,
  editorTheme: PropTypes.string.isRequired,
  handleCodeChange: PropTypes.func.isRequired,
  showDropShadow: PropTypes.bool.isRequired,
  showEditorLineNumbers: PropTypes.bool.isRequired,
  titlebarTheme: PropTypes.string.isRequired,
  windowBgColor: PropTypes.string.isRequired,
  windowPadding: PropTypes.object.isRequired
};

export default function CodeWindow(props) {
  const windowStyle = props.showDropShadow
    ? {
        boxShadow: `${props.dropShadowOffsets.x}px ${props.dropShadowOffsets.y}px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`
      }
    : {};

  const windowBgStyle = {
    padding: `${props.windowPadding.y}em ${props.windowPadding.x}em`,
    backgroundColor: props.windowBgColor
  };

  return (
    <VBox id="code-window-bg" style={windowBgStyle} centered={false}>
      <VBox id="code-window" style={windowStyle} centered={false}>
        <TitleBar theme={props.titlebarTheme} />
        <CodeEditor
          code={props.editorCode}
          fontSize={props.editorFontSize}
          fontFamily={props.editorFont}
          theme={props.editorTheme}
          handleCodeChange={props.handleCodeChange}
          lineHeight={props.editorLineHeight}
          language={props.editorLanguage}
          showLines={props.showEditorLineNumbers}
        />
      </VBox>
    </VBox>
  );
}
