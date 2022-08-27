import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

function App(props) {
  return (
    <div>
      <h2>Hello World!!</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
