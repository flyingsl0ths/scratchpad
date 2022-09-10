import React from "react";
import Editor from "react-simple-code-editor";
import PropTypes from "prop-types";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

import { HBox, VBox } from "./Containers";

Lines.propTypes = {
  lineCount: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired
};

CodeEditor.propTypes = {
  fontSize: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  showLines: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

function Lines(props) {
  let lines = [];

  for (let i = 0, total = props.lineCount; i < total; ++i) {
    lines.push(<li key={i}>{i + 1}</li>);
  }

  return (
    <VBox id="editor-lines" centered={false}>
      <ol id="lines">{lines}</ol>
    </VBox>
  );
}

export default function CodeEditor(props) {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <HBox id="editor" centered={false}>
      {props.showLines && <Lines fontSize={props.fontSize} lineCount={3} />}
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code =>
          hljs.highlight(code, { language: props.language }).value
        }
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          margin: props.showLines ? "0 0 0 0.8em" : "0"
        }}
      />
    </HBox>
  );
}
