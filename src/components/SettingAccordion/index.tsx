import React from "react";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { VBox } from "../Container";
import Spacer from "../Spacer";

interface SettingAccordionProps {
  children: JSX.Element;
  subTitle: string;
  title: string;
}

export default function SettingAccordion(
  props: SettingAccordionProps
): JSX.Element {
  return (
    <div style={{ margin: "1em 0" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content">
          <VBox centered={false}>
            <h3 className="settings-title">{props.title}</h3>
            <Spacer amount="0.25em" />
            <h4 className="settings-sub-title">{props.subTitle}</h4>
          </VBox>
        </AccordionSummary>
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
