import React from "react";
import Editor from "react-simple-code-editor";
import hljs from "highlight.js";

import { HBox, VBox } from "../Container";

import "./styles.scss";

interface EditorLineProps {
  lineCount: number;
}

interface CodeEditorProps {
  fontFamily: string;
  fontSize: number;
  language: string;
  lineHeight: number;
  showLines: boolean;
  theme: string;
}

function Lines(props: EditorLineProps): JSX.Element {
  const lines: JSX.Element[] = [];

  for (let i = 0, total = props.lineCount; i < total; ++i) {
    lines.push(<li key={i}>{i + 1}</li>);
  }

  return (
    <VBox id="editor-lines" centered={false}>
      <ol className="lines">{lines}</ol>
    </VBox>
  );
}

export default function CodeEditor(props: CodeEditorProps): JSX.Element {
  const [code, setCode] = React.useState(
    'function doSomething() {           \n console.log("Hello!"); \n}'
  );

  return props.showLines ? (
    <HBox
      id="editor"
      className="hljs"
      style={{
        fontSize: `${props.fontSize}px`,
        lineHeight: props.lineHeight,
        fontFamily: `"${props.fontFamily}"`
      }}
      centered={false}>
      <Lines lineCount={computeCodeLines(code)} />

      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code =>
          hljs.highlight(code, { language: props.language }).value
        }
        style={{ width: "100%", height: "100%" }}
      />
    </HBox>
  ) : (
    <HBox
      id="editor"
      className="hljs"
      style={{
        fontSize: `${props.fontSize}px`,
        lineHeight: props.lineHeight,
        fontFamily: `"${props.fontFamily}"`
      }}
      centered={false}>
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

function computeCodeLines(code: string): number {
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
