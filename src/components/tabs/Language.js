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
  const languages = [
    "ada",
    "arduino",
    "armasm",
    "avrasm",
    "actionscript",
    "apache",
    "applescript",
    "awk",
    "bash",
    "basic",
    "brainfuck",
    "c#",
    "c",
    "c++",
    "cmake",
    "coq",
    "css",
    "coffeescript",
    "crystal",
    "d",
    "dart",
    "delphi",
    "diff",
    "dockerfile",
    "elixir",
    "elm",
    "erlang",
    "excel",
    "f#",
    "fortran",
    "go",
    "gradle",
    "graphql",
    "groovy",
    "html",
    "xml",
    "http",
    "haml",
    "haskell",
    "haxe",
    "ini",
    "toml",
    "json",
    "java",
    "javascript",
    "julia",
    "kotlin",
    "latex",
    "lisp",
    "lua",
    "makefile",
    "markdown",
    "mathematica",
    "matlab",
    "maxima",
    "nginx",
    "nim",
    "nix",
    "ocaml",
    "objectivec",
    "glsl",
    "php",
    "perl",
    "plaintext",
    "postgresql",
    "powershell",
    "processing",
    "prolog",
    "python",
    "q",
    "qml",
    "r",
    "ruby",
    "rust",
    "sas",
    "scss",
    "sql",
    "scala",
    "scheme",
    "shell",
    "smalltalk",
    "sml",
    "swift",
    "typescript",
    "vhdl",
    "vala",
    "verilog",
    "vim",
    "x86asm",
    "yaml"
  ];

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
        handleOnClick={event => {
          props.handleLanguageChange(
            CODE_WINDOW_CHANGES.LANGUAGE,
            event.target.innerText
          );
        }}
        labels={languages}
      />
    </VBox>
  );
}
