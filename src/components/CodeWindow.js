import React from "react";

import TitleBar from "./TitleBar";
import { VBox } from "./Containers";
import CodeEditor from "./CodeEditor";

export default function CodeWindow() {
  return (
    <div id="code-window-bg" className="vbox">
      <VBox id="code-window" centered={false}>
        <TitleBar />
        <CodeEditor
          fontSize={"1.5vw"}
          theme=""
          language="js"
          showLines={true}
        />
      </VBox>
    </div>
  );
}
