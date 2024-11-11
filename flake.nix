{
  description = "A flake for Strapi website development with pnpm";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        dev = pkgs.writeShellScriptBin "dev" ''
          #!${pkgs.bash}/bin/bash
          pnpm install
          pnpm run develop
        '';
        run = pkgs.writeShellScriptBin "run" ''
          #!${pkgs.bash}/bin/bash
          pnpm install
          pnpm run start
        '';
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            dev
            run
          ];
        };

      }
    );
}
