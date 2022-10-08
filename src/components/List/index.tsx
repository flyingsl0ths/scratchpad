import React from "react";
import Button from "@mui/material/Button";

import { MouseEvent } from "../../Utils";
import { VBox, HBox } from "../Container";

import "./styles.scss";

interface ListProps {
  children: JSX.Element[];
  handleOnClick?: MouseEvent<HTMLElement>;
  id?: string;
  orientation: string;
}

interface ButtonListProps {
  handleOnClick?: MouseEvent<HTMLElement>;
  id?: string;
  labels: readonly string[];
  orientation: string;
  selected: string;
}

export function List(props: ListProps): JSX.Element {
  return props.orientation === "v" ? (
    <VBox
      handleOnClick={props.handleOnClick}
      id={props.id}
      className={`${props.orientation}-list`}
      centered={false}>
      {props.children}
    </VBox>
  ) : (
    <HBox
      handleOnClick={props.handleOnClick}
      id={props.id}
      className={`${props.orientation}-list`}
      centered={false}>
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
    <List handleOnClick={props.handleOnClick} orientation={props.orientation}>
      {buttons}
    </List>
  );
}
