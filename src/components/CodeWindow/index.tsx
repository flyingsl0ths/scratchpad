import React from "react";

import TitleBar from "../TitleBar";
import { VBox } from "../Container";
import CodeEditor from "../CodeEditor";

import "./styles.scss";

type Offset = { x: number; y: number };

interface CodeWindowProps {
  dropShadowAlpha: number;
  dropShadowOffsets: Offset;
  editorFontSize: number;
  editorFont: string;
  editorLanguage: string;
  editorLineHeight: number;
  editorTheme: string;
  showDropShadow: boolean;
  showEditorLineNumbers: boolean;
  titlebarTheme: string;
  windowBgColor: string;
  windowPadding: Offset;
}

export default function CodeWindow(props: CodeWindowProps): JSX.Element {
  const windowStyle = props.showDropShadow
    ? {
        boxShadow: `${props.dropShadowOffsets.x}px ${
          props.dropShadowOffsets.y
        }px 8px 0 rgba(0,0,0,${props.dropShadowAlpha / 100})`
      }
    : undefined;

  const windowBgStyle = {
    padding: `${props.windowPadding.y}% ${props.windowPadding.x}%`,
    backgroundColor: props.windowBgColor
  };

  return (
    <VBox centered={false} id="code-window-bg" style={windowBgStyle}>
      <VBox centered={false} id="code-window" style={windowStyle}>
        <TitleBar theme={props.titlebarTheme} />
        <CodeEditor
          fontFamily={props.editorFont}
          fontSize={props.editorFontSize}
          language={props.editorLanguage}
          lineHeight={props.editorLineHeight}
          showLines={props.showEditorLineNumbers}
          theme={props.editorTheme}
        />
      </VBox>
    </VBox>
  );
}
