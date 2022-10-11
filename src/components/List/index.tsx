import React from "react";
import Button from "@mui/material/Button";

import { MouseEvent } from "../../Utils";
import { VBox, HBox } from "../Container";

import "./styles.scss";

interface ListProps {
  children: JSX.Element[];
  id?: string;
  onClick?: MouseEvent<HTMLElement>;
  orientation: string;
}

interface ButtonListProps {
  id?: string;
  labels: readonly string[];
  onClick?: MouseEvent<HTMLElement>;
  orientation: string;
  selected: string;
}

export function List(props: ListProps): JSX.Element {
  return props.orientation === "v" ? (
    <VBox
      centered={false}
      className={`${props.orientation}-list`}
      id={props.id}
      OnClick={props.onClick}>
      {props.children}
    </VBox>
  ) : (
    <HBox
      centered={false}
      className={`${props.orientation}-list`}
      id={props.id}
      OnClick={props.onClick}>
      {props.children}
    </HBox>
  );
}

export function ButtonList(props: ButtonListProps): JSX.Element {
  const buttonStyle = {
    margin: "0.5em auto",
    padding: "1em",
    width: "90%"
  } as const;

  const buttons = props.labels.map((label, i) => (
    <Button
      variant={props.selected === label ? "contained" : "outlined"}
      sx={buttonStyle}
      fullWidth={true}
      key={i}
      size="large"
      component="div">
      {label}
    </Button>
  ));

  return (
    <List onClick={props.onClick} orientation={props.orientation}>
      {buttons}
    </List>
  );
}
