import React from "react";
import Checkbox from "@mui/material/Checkbox";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { HexColorPicker } from "react-colorful";

import SettingAccordion from "../SettingAccordion";
import { HBox, VBox } from "../Container";
import { List } from "../List";
import Section from "../Section";
import LabeledSlider from "../LabeledSlider";
import TitleBar from "../TitleBar";
import Spacer from "../Spacer";
import {
  CodeWindowEvents,
  withEventChange,
  EventChange,
  CodeWindowChange
} from "../../CodeWindowEvents";

interface WindowSectionProps {
  handleSceneChanges: CodeWindowChange;
  windowBgColor: string;
}

interface TitleBarOptionsProps {
  handleWindowTitleBarChanged: EventChange<string>;
}

interface WindowPaddingOptionsProps {
  handleHPaddingChanged: EventChange<number>;
  handleVPaddingChanged: EventChange<number>;
}

interface WindowBackdropOptionsProps {
  handleWindowShadowXChanged: EventChange<number>;
  handleWindowShadowYChanged: EventChange<number>;
  handleWindowShadowAlphaChanged: EventChange<number>;
  handleWindowShadowToggleChanged: EventChange<boolean>;
  handleWindowBgColorChanged: EventChange<string>;
  windowBgColor: string;
}

interface TitleBarThemeContainerProps {
  theme: string;
  handleOnClick: EventChange<string>;
}

interface ColorPickerProps {
  color: string;
  handleColorChanged: EventChange<string>;
}

export default function WindowSection(props: WindowSectionProps): JSX.Element {
  return (
    <Section title="Window" icon={<WebAssetIcon />}>
      <SettingAccordion
        title="Window Controls"
        subTitle="Adjust the window's titlebar style">
        <TitleBarOptions
          handleWindowTitleBarChanged={withEventChange(
            CodeWindowEvents.TITLEBAR,
            props.handleSceneChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Window Padding"
        subTitle="Adjust the window's padding">
        <WindowPaddingOptions
          handleHPaddingChanged={withEventChange(
            CodeWindowEvents.HORIZONTAL_PADDING,
            props.handleSceneChanges
          )}
          handleVPaddingChanged={withEventChange(
            CodeWindowEvents.VERTICAL_PADDING,
            props.handleSceneChanges
          )}
        />
      </SettingAccordion>

      <SettingAccordion
        title="Window Backdrop"
        subTitle="Adjust the window's backdrop">
        <WindowBackdropOptions
          handleWindowShadowXChanged={withEventChange(
            CodeWindowEvents.SHADOW_OFFSET_X,
            props.handleSceneChanges
          )}
          handleWindowShadowYChanged={withEventChange(
            CodeWindowEvents.SHADOW_OFFSET_Y,
            props.handleSceneChanges
          )}
          handleWindowShadowAlphaChanged={withEventChange(
            CodeWindowEvents.SHADOW_ALPHA,
            props.handleSceneChanges
          )}
          handleWindowShadowToggleChanged={withEventChange(
            CodeWindowEvents.SHADOW_TOGGLED,
            props.handleSceneChanges
          )}
          handleWindowBgColorChanged={withEventChange(
            CodeWindowEvents.BG_COLOR,
            props.handleSceneChanges
          )}
          windowBgColor={props.windowBgColor}
        />
      </SettingAccordion>
    </Section>
  );
}

function TitleBarOptions(props: TitleBarOptionsProps): JSX.Element {
  return (
    <VBox centered={false}>
      <List orientation="h">
        <TitleBarThemeContainer
          handleOnClick={props.handleWindowTitleBarChanged}
          theme="macos"
        />

        <TitleBarThemeContainer
          handleOnClick={props.handleWindowTitleBarChanged}
          theme="windows"
        />
      </List>
    </VBox>
  );
}

function TitleBarThemeContainer(
  props: TitleBarThemeContainerProps
): JSX.Element {
  return (
    <div
      onClick={() => props.handleOnClick(props.theme)}
      className="rounded-border">
      <TitleBar theme={props.theme} />
    </div>
  );
}

function WindowPaddingOptions(props: WindowPaddingOptionsProps): JSX.Element {
  return (
    <VBox className="pd-s" centered={false}>
      <LabeledSlider
        label="Horizontal Padding"
        min={1}
        max={20}
        step={1}
        defaultValue={5}
        handleChange={props.handleHPaddingChanged}
      />
      <Spacer amount="1em" />
      <LabeledSlider
        label="Vertical Padding"
        min={1}
        max={20}
        step={1}
        defaultValue={5}
        handleChange={props.handleVPaddingChanged}
      />
    </VBox>
  );
}

function WindowBackdropOptions(props: WindowBackdropOptionsProps): JSX.Element {
  const spacerAmount = "0.7em";
  return (
    <VBox className="pd-s" centered={false}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={true}
            onChange={event =>
              props.handleWindowShadowToggleChanged(event.target.checked)
            }
          />
        }
        label="Show shadows"
      />

      <Spacer amount={spacerAmount} />

      <ColorPicker
        color={props.windowBgColor}
        handleColorChanged={props.handleWindowBgColorChanged}
      />

      <Spacer amount={spacerAmount} />

      <LabeledSlider
        label="Horizontal offset"
        min={1}
        max={100}
        step={1}
        defaultValue={1}
        handleChange={props.handleWindowShadowXChanged}
      />

      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Vertical offset"
        min={1}
        max={100}
        step={1}
        defaultValue={2}
        handleChange={props.handleWindowShadowYChanged}
      />
      <Spacer amount={spacerAmount} />
      <LabeledSlider
        label="Transparency"
        min={1}
        max={100}
        step={1}
        defaultValue={2}
        handleChange={props.handleWindowShadowAlphaChanged}
      />
    </VBox>
  );
}

function ColorPicker(props: ColorPickerProps): JSX.Element {
  const spacerAmount = "0.7em";
  return (
    <VBox centered={false}>
      <h4 className="fw-n">{`Background color`}</h4>
      <Spacer amount={spacerAmount} />
      <HexColorPicker
        style={{ width: "100%" }}
        color={props.color}
        onChange={props.handleColorChanged}
      />
      <Spacer amount={spacerAmount} />
      <HBox centered={false}>
        <TextField
          size="medium"
          fullWidth={false}
          label="Hex color"
          value={props.color}
          variant="outlined"
          onChange={event => props.handleColorChanged(event.target.value)}
        />
        <Spacer amount="0.2em" />
      </HBox>
    </VBox>
  );
}
