import React from "react";
import Editor from "react-simple-code-editor";
import PropTypes from "prop-types";
import hljs from "highlight.js";
import "./CodeEditor.scss";

import { HBox, VBox } from "../Container/Container";

Lines.propTypes = {
  lineCount: PropTypes.number.isRequired
};

CodeEditor.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handleCodeChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  lineHeight: PropTypes.number.isRequired,
  showLines: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

function Lines(props) {
  const lines = [];

  for (let i = 0, total = props.lineCount; i < total; ++i) {
    lines.push(<li key={i}>{i + 1}</li>);
  }

  return (
    <VBox id="editor-lines" centered={false}>
      <ol className="lines">{lines}</ol>
    </VBox>
  );
}

export default function CodeEditor(props) {
  const [code, setCode] = React.useState(
    'function doSomething() {           \n console.log("Hello!"); \n}'
  );

  return (
    <HBox
      id="editor"
      className="hljs"
      style={{
        fontSize: `${props.fontSize}px`,
        lineHeight: props.lineHeight,
        fontFamily: `"${props.fontFamily}"`
      }}
      centered={false}>
      {props.showLines && <Lines lineCount={computeCodeLines(code)} />}

      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code =>
          hljs.highlight(code, { language: props.language }).value
        }
        style={{ width: "100%", height: "100%" }}
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
