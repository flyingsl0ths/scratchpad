import React from "react";
import ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import ScreenshotMonitor from "@mui/icons-material/ScreenshotMonitor";

import { VBox } from "./components/Containers";
import CodeWindow from "./components/CodeWindow";
import Spacer from "./components/Spacer";
import SettingsTabs from "./components/tabs";

import "./css/index.css";

function App() {
  return (
    <VBox centered={true}>
      <h1 id="header">Scratchpad</h1>

      <CodeWindow />

      <Spacer amount={"2em"} />

      <Button variant="contained" startIcon={<ScreenshotMonitor />}>
        Screenshot
      </Button>

      <Spacer amount={"2em"} />

      <SettingsTabs />
    </VBox>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
