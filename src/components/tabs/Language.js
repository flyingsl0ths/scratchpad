import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import PropTypes from "prop-types";

import { VBox } from "../Containers";
import { ButtonList } from "../list";
import LabeledIcon from "../LabeledIcon";
import Spacer from "../Spacer";
import CodeWindowChanges from "../../CodeWindowEvents";

LanguageTab.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default function LanguageTab(props) {
  const { CODE_WINDOW_CHANGES } = CodeWindowChanges;
  return (
    <VBox id="lang-tab" className="tab-item" centered={false}>
      <LabeledIcon label="Language">
        <DataObjectIcon />
      </LabeledIcon>
      <Spacer amount="0.5em" />
      <ButtonList
        orientation="v"
        selected={props.selectedLanguage}
        handleOnClick={event =>
          props.handleLanguageChange(
            CODE_WINDOW_CHANGES.LANGUAGE,
            event.target.innerText
          )
        }
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
