import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

import { VBox } from "../Containers";
import { ButtonList } from "../list";
import LabeledIcon from "../LabeledIcon";
import Spacer from "../Spacer";

export default function LanguageTab(props) {
  return (
    <VBox id="lang-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Language">
        <DataObjectIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <ButtonList
        orientation="v"
        labels={[
          "C",
          "C++",
          "Python",
          "Javascript",
          "Typescript",
          "Lua",
          "Haskell",
          "Java",
          "Kotlin"
        ]}
      />
    </VBox>
  );
}
