import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

import { VBox } from "../Container";
import { ButtonList } from "../List";
import LabeledIcon from "../LabledIcon";
import Spacer from "../Spacer";
import { LANGUAGES } from "../../EditorConstants";

interface LanguageTabProps {
  handleLanguageChange: (language: string) => void;
  selectedLanguage: string;
}

export default function LanguageTab(props: LanguageTabProps): JSX.Element {
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
          props.handleLanguageChange((event.target as HTMLElement).innerText)
        }
        labels={LANGUAGES}
      />
    </VBox>
  );
}
