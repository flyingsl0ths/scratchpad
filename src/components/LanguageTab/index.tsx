import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";

import { VBox } from "../Container";
import { ButtonList } from "../List";
import LabeledIcon from "../LabledIcon";
import Spacer from "../Spacer";
import { LANGUAGES } from "../../EditorConstants";

interface LanguageTabProps {
  onEditorLanguageChange: (language: string) => void;
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
        labels={LANGUAGES}
        onClick={event =>
          props.onEditorLanguageChange((event.target as HTMLElement).innerText)
        }
        orientation="v"
        selected={props.selectedLanguage}
      />
    </VBox>
  );
}
