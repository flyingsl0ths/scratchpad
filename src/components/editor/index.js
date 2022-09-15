import React from "react";
import PropTypes from "prop-types";

import TitleBar from "../TitleBar";
import { VBox } from "../Containers";
import CodeEditor from "./CodeEditor";

CodeWindow.propTypes = {
  dropShadowAlpha: PropTypes.number.isRequired,
  dropShadowOffsets: PropTypes.object.isRequired,
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
        boxShadow: `${props.dropShadowOffsets.x}px ${
          props.dropShadowOffsets.y
        }px 8px 0 rgba(0,0,0,${props.dropShadowAlpha / 100})`
      }
    : {};

  const windowBgStyle = {
    padding: `${props.windowPadding.y}% ${props.windowPadding.x}%`,
    backgroundColor: props.windowBgColor
  };

  return (
    <VBox id="code-window-bg" style={windowBgStyle} centered={false}>
      <VBox id="code-window" style={windowStyle} centered={false}>
        <TitleBar theme={props.titlebarTheme} />
        <CodeEditor
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
