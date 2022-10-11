import React from "react";
import Button from "@mui/material/Button";
import ScreenshotMonitor from "@mui/icons-material/ScreenshotMonitor";
import TextField from "@mui/material/TextField";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

import { VBox, HBox } from "../Container";
import Spacer from "../Spacer";
import Selection from "../Selection";

const FILE_EXTENSIONS = ["jpeg", "png", "svg"] as const;

interface ScreenshotProps {
  targetId: string;
  onFileNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ScreenshotState {
  containsNoFileName: boolean;
  fileExtension: string;
  fileName: string;
}

export default class Screenshot extends React.Component<
  ScreenshotProps,
  ScreenshotState
> {
  private targetId: string;
  constructor(props: ScreenshotProps) {
    super(props);
    this.state = {
      containsNoFileName: false,
      fileExtension: FILE_EXTENSIONS[0],
      fileName: ""
    };
    this.targetId = props.targetId;
  }

  handleScreenshot = () => {
    const fileName = this.state.fileName;

    if (fileName.length === 0) {
      this.setState({ containsNoFileName: true });
      return;
    }

    const fileExtension = capitalize(this.state.fileExtension);
    const screenshotMethod = fromFileExtension(fileExtension);

    if (!screenshotMethod) {
      console.error(`Unknown download method: ${fileExtension}`);
      return;
    }

    const target = document.getElementById(this.targetId);

    if (!target) {
      console.error("No screenshot target!");
      return;
    }

    screenshotMethod(target).then(dataUrl => {
      download(dataUrl, `${fileName}.${this.state.fileExtension}`);
      this.setState({ containsNoFileName: false });
    });
  };

  handleFileNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ fileName: event.target.value });
    this.props.onFileNameChange(event);
  };

  handleFileExtensionChanged = (extension: string) => {
    this.setState({ fileExtension: extension });
  };

  render() {
    const textField = this.state.containsNoFileName ? (
      <TextField
        error
        label="File name"
        variant="outlined"
        onChange={this.handleFileNameChanged}
      />
    ) : (
      <TextField
        label="File name"
        variant="outlined"
        onChange={this.handleFileNameChanged}
      />
    );

    return (
      <VBox centered={false}>
        <HBox centered={false}>
          {textField}

          <Spacer amount="0.5em" />

          <Selection
            defaultValue={1}
            label="Export as"
            values={FILE_EXTENSIONS}
            onSelectionChanged={this.handleFileExtensionChanged}
          />
        </HBox>

        <Spacer amount="1em" />

        <Button
          variant="contained"
          size="medium"
          onClick={this.handleScreenshot}
          startIcon={<ScreenshotMonitor />}>
          Screenshot
        </Button>
      </VBox>
    );
  }
}

function capitalize(fileExtension: string): string {
  return fileExtension[0].toUpperCase() + fileExtension.slice(1);
}

function fromFileExtension(
  extension: string
): ((target: HTMLElement) => Promise<string>) | null {
  switch (extension) {
    case "Svg":
      return htmlToImage.toSvg;
    case "Png":
      return htmlToImage.toPng;
    case "Jpeg":
      return htmlToImage.toJpeg;
    default:
      return null;
  }
}
