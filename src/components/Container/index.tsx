import React from "react";

import { Orientation, MouseEvent } from "../../Utils";

import "./styles.scss";

interface BoxProps {
  centered: boolean;
  children: JSX.Element | readonly JSX.Element[];
  className?: string;
  id?: string;
  OnClick?: MouseEvent<HTMLElement>;
  style?: React.CSSProperties;
}

export const HBox = (props: BoxProps) => Box(props, "h");

export const VBox = (props: BoxProps) => Box(props, "v");

function Box(props: BoxProps, orientation: Orientation): JSX.Element {
  let className = props.centered ? `c${orientation}box` : `${orientation}box`;

  const filters: string[] = [];

  if (orientation === "h") {
    filters.push("chbox", "hbox");
  } else {
    filters.push("cvbox", "vbox");
  }

  if (props.className) {
    className += ` ${props.className}`;
    filters.push(props.className);
  }

  return props.OnClick ? (
    <div
      className={className}
      id={props.id}
      onClick={event =>
        forwardEvent(event, props.OnClick as MouseEvent<HTMLElement>, filters)
      }
      style={props.style}>
      {props.children}
    </div>
  ) : (
    <div className={className} id={props.id} style={props.style}>
      {props.children}
    </div>
  );
}

function forwardEvent(
  event: React.MouseEvent<HTMLElement>,
  handler: MouseEvent<HTMLElement>,
  filters: readonly string[]
) {
  const target = event.target as HTMLElement;

  for (const filter of filters) {
    if (target.classList.contains(filter)) {
      return;
    }
  }

  handler(event);
}
