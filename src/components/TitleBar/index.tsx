import React from "react";

import { HBox } from "../Container";

import "./styles.scss";

interface TitleBarProps {
  theme: string;
  fileName?: string;
}

export default function TitleBar(props: TitleBarProps): JSX.Element {
  return (
    <HBox className={props.theme} centered={true}>
      {buildTheme(props.theme, props.fileName)}
    </HBox>
  );
}

function buildTheme(theme: string, title?: string): JSX.Element[] {
  let result: JSX.Element[] = [];

  if (theme.includes("macos")) {
    result = [
      <div key={1} className="circle red" />,
      <div key={2} className="circle yellow" />,
      <div key={3} className="circle green" />,
      <div key={4} className="title">{title}</div>
    ];
  } else if (theme.includes("windows")) {
    result = [
      <div key={1} className="underscore" />,
      <div key={2} className="square" />,
      <div key={3} className="letter-x" />,
      <div key={4} className="title">{title}</div>
    ];
  }

  return result;
}
