import React from "react";

import { HBox } from "../Container";

import "./styles.scss";

interface TitleBarProps {
  theme: string;
}

export default function TitleBar(props: TitleBarProps): JSX.Element {
  return (
    <HBox className={props.theme} centered={true}>
      {computeThemeProps(props.theme)}
    </HBox>
  );
}

function computeThemeProps(theme: string): JSX.Element[] {
  let result: JSX.Element[] = [];

  if (theme.includes("macos")) {
    result = [
      <div key={1} className="circle red" />,
      <div key={2} className="circle yellow" />,
      <div key={3} className="circle green" />
    ];
  } else if (theme.includes("windows")) {
    result = [
      <div key={1} className="underscore" />,
      <div key={2} className="square" />,
      <div key={3} className="letter-x" />
    ];
  }

  return result;
}
