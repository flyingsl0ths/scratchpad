import React from "react";
import Button from "@mui/material/Button";
import ScreenshotMonitor from "@mui/icons-material/ScreenshotMonitor";
import TextField from "@mui/material/TextField";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

import { VBox, HBox } from "../Container/Container";
import Spacer from "../Spacer/Spacer";
import Selection from "../Selection/Selection";

export default class Screenshot extends React.Component {
  static FILE_EXTENSIONS = ["jpeg", "png", "svg"];

  constructor(props) {
    super(props);
    this.state = {
      containsNoFileName: false,
      fileExtension: Screenshot.FILE_EXTENSIONS[0]
    };
  }

  handleScreenshot = () => {
    const fileName = document.getElementById("screenshot-fn").value;

    if (fileName === "") {
      this.setState({ containsNoFileName: true });
      return;
    }

    const onDownload = dataUrl => {
      download(dataUrl, `${fileName}.${this.state.fileExtension}`);
      this.setState({ containsNoFileName: false });
    };

    const downloadMethod = capitalize(this.state.fileExtension);
    htmlToImage[`to${downloadMethod}`](
      document.getElementById("code-window-bg")
    ).then(onDownload);
  };

  handleFileExtensionChanged = (_, extension) => {
    this.setState({ fileExtension: extension });
  };

  render() {
    const textfield = this.state.containsNoFileName ? (
      <TextField
        error
        id="screenshot-fn"
        label="File name"
        variant="outlined"
      />
    ) : (
      <TextField id="screenshot-fn" label="File name" variant="outlined" />
    );

    return (
      <VBox centered={false}>
        <HBox centered={false}>
          {textfield}

          <Spacer amount="0.5em" />

          <Selection
            defaultValue={1}
            label="Export as"
            values={Screenshot.FILE_EXTENSIONS}
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

function capitalize(fileExtension) {
  return fileExtension[0].toUpperCase() + fileExtension.slice(1);
}
