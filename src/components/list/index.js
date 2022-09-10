import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

import { VBox, HBox } from "../Containers";

List.propTypes = {
  id: PropTypes.string,
  children: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired
};

ButtonList.propTypes = {
  id: PropTypes.string,
  labels: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired
};

export function List(props) {
  const { id = "" } = props;
  return props.orientation === "v" ? (
    <VBox id={id} className={`${props.orientation}-list`} centered={false}>
      {props.children}
    </VBox>
  ) : (
    <HBox id={id} className={`${props.orientation}-list`} centered={false}>
      {props.children}
    </HBox>
  );
}

export function ButtonList(props) {
  const buttons = props.labels.map((theme, i) => (
    <Button
      variant="outlined"
      sx={{
        margin: "0.5em auto",
        padding: "1em",
        width: "90%"
      }}
      fullWidth={true}
      key={i}>
      {theme}
    </Button>
  ));

  return <List orientation={props.orientation}>{buttons}</List>;
}
