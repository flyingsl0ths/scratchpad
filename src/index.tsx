import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Unable to locate root element!!");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
