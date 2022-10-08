import React from "react";

import { HBox } from "../Container";

import "./styles.scss";

interface LabeledIconProps {
  children: JSX.Element;
  id?: string;
  label: string;
  labelStyle?: string;
}

export default function LabeledIcon(props: LabeledIconProps): JSX.Element {
  return (
    <HBox className="mx-w" id={props.id} centered={true}>
      <h2
        className={
          props.labelStyle ? `m-rs l-icon ${props.labelStyle}` : "m-rs l-icon"
        }>
        {props.label}
      </h2>

      {props.children}
    </HBox>
  );
}
