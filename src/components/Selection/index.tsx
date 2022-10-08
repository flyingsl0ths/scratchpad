import React from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "./styles.scss";

interface SelectionProps {
  defaultValue: number;
  label: string;
  onSelectionChanged: (value: string) => void;
  values: readonly string[];
}

export default function Selection(props: SelectionProps): JSX.Element {
  const [value, setValue] = React.useState(String(props.defaultValue));

  const values = props.values.map((label, i) => (
    <MenuItem key={i} value={i + 1}>
      {label}
    </MenuItem>
  ));

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;

    setValue(newValue);

    props.onSelectionChanged(props.values[Number(newValue) - 1]);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select value={value} label={props.label} onChange={handleChange}>
        {values}
      </Select>
    </FormControl>
  );
}
