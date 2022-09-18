import React from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import "./Selection.scss";

export default class Selection extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onSelectionChanged: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.string.isRequired)
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      values: props.values,
      label: props.label
    };

    this.onSelectionChanged = props.onSelectionChanged;
  }

  handleChange = event => {
    const newValue = event.target.value;
    this.setState({ value: newValue });

    if (this.onSelectionChanged) {
      this.onSelectionChanged(newValue, this.state.values[newValue - 1]);
    }
  };

  render() {
    const values = this.state.values.map((label, i) => (
      <MenuItem key={i} value={i + 1}>
        {label}
      </MenuItem>
    ));

    return (
      <FormControl fullWidth>
        <InputLabel>{this.state.label}</InputLabel>
        <Select
          value={this.state.value}
          label={this.state.label}
          onChange={this.handleChange}>
          {values}
        </Select>
      </FormControl>
    );
  }
}
