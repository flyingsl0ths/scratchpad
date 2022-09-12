import React from "react";
import Editor from "react-simple-code-editor";
import PropTypes from "prop-types";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

import { HBox, VBox } from "../Containers";

Lines.propTypes = {
  lineCount: PropTypes.number.isRequired,
  theme: PropTypes.string
};

CodeEditor.propTypes = {
  fontSize: PropTypes.number.isRequired,
  fontFamily: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  lineHeight: PropTypes.number.isRequired,
  showLines: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  handleCodeChange: PropTypes.func.isRequired
};

function Lines(props) {
  const lines = [];

  for (let i = 0, total = props.lineCount; i < total; ++i) {
    lines.push(<li key={i}>{i + 1}</li>);
  }

  return (
    <VBox
      id="editor-lines"
      style={computeLineStyle(props.theme)}
      centered={false}>
      <ol id="lines">{lines}</ol>
    </VBox>
  );
}

export default function CodeEditor(props) {
  return (
    <HBox
      id="editor"
      style={{ fontSize: `${props.fontSize}vw`, lineHeight: props.lineHeight }}
      centered={false}>
      {props.showLines && (
        <Lines theme={props.theme} lineCount={computeCodeLines(props.code)} />
      )}

      <Editor
        value={props.code}
        onValueChange={code => props.handleCodeChange(code)}
        highlight={code =>
          hljs.highlight(code, { language: props.language }).value
        }
        style={{
          fontFamily: props.fontFamily
        }}
      />
    </HBox>
  );
}

function computeCodeLines(code) {
  if (code === "") {
    return 1;
  }

  const result = code.match(/\n/g);

  let lines = 1;
  if (result) {
    lines += result.length;
  }

  return lines;
}

function computeLineStyle(theme) {
  return {};
}
