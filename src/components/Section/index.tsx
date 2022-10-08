import React from "react";
import { VBox } from "../Container";
import LabeledIcon from "../LabledIcon";
import Spacer from "../Spacer";

interface SectionProps {
  children: readonly JSX.Element[];
  icon: JSX.Element;
  title: string;
}

export default function Section(props: SectionProps): JSX.Element {
  const children = [...props.children];

  children.push(<LabeledIcon label={props.title}>{props.icon}</LabeledIcon>);
  children.push(<Spacer amount="0.25em" />);

  return (
    <VBox className="section" centered={false}>
      {props.children}
    </VBox>
  );
}
