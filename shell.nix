{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  nativeBuildInputs = (with pkgs; [
    nodejs
    nodePackages.prettier

    nixpkgs-fmt
  ]);
  # Optional
  shellHook =
    let
      # Primarily used for language servers/formatters when opening project in neovim/vim
      npmGlobalDirectory = ".npm-global";
    in
    ''
      export PATH="${builtins.getEnv "HOME"}/${npmGlobalDirectory}/bin:$PATH"
    '';
}
