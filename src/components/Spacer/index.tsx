import React from "react";

interface SpacerProps {
  amount: string | number;
}

export default function Spacer(props: SpacerProps): JSX.Element {
  return <div style={{ margin: props.amount }}></div>;
}
