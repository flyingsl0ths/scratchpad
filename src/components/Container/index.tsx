import React from "react";

import { Orientation, MouseEvent } from "../../Utils";

import "./styles.scss";

interface BoxProps {
  centered: boolean;
  children: JSX.Element | readonly JSX.Element[];
  className?: string;
  handleOnClick?: MouseEvent<HTMLElement>;
  id?: string;
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

  return props.handleOnClick ? (
    <div
      onClick={event =>
        forwardEvent(
          event,
          props.handleOnClick as MouseEvent<HTMLElement>,
          filters
        )
      }
      id={props.id}
      style={props.style}
      className={className}>
      {props.children}
    </div>
  ) : (
    <div id={props.id} style={props.style} className={className}>
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
