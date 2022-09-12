import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

import { VBox, HBox } from "../Containers";

List.propTypes = {
  children: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func,
  id: PropTypes.string,
  orientation: PropTypes.string.isRequired
};

ButtonList.propTypes = {
  handleOnClick: PropTypes.func,
  id: PropTypes.string,
  labels: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired
};

export function List(props) {
  const { id = "" } = props;
  return props.orientation === "v" ? (
    <VBox
      handleOnClick={props.handleOnClick}
      id={id}
      className={`${props.orientation}-list`}
      centered={false}>
      {props.children}
    </VBox>
  ) : (
    <HBox
      handleOnClick={props.handleOnClick}
      id={id}
      className={`${props.orientation}-list`}
      centered={false}>
      {props.children}
    </HBox>
  );
}

export function ButtonList(props) {
  const buttons = props.labels.map((label, i) => (
    <Button
      variant={props.selected === label ? "contained" : "outlined"}
      sx={{
        margin: "0.5em auto",
        padding: "1em",
        width: "90%"
      }}
      fullWidth={true}
      key={i}
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
