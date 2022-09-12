import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PropTypes from "prop-types";

import { VBox } from "../Containers";
import { ButtonList } from "../list";
import LabeledIcon from "../LabeledIcon";
import Spacer from "../Spacer";

LanguageTab.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default function LanguageTab(props) {
  return (
    <VBox id="lang-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Language">
        <DataObjectIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <ButtonList
        orientation="v"
        selected={props.selectedLanguage}
        handleOnClick={props.handleLanguageChange}
        labels={[
          "c",
          "c++",
          "python",
          "javascript",
          "typescript",
          "lua",
          "haskell",
          "java",
          "kotlin"
        ]}
      />
    </VBox>
  );
}
