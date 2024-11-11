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
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
          ];
        };

        packages.default = pkgs.writeShellScriptBin "start-strapi" ''
          #!${pkgs.bash}/bin/bash
          pnpm install
          pnpm run develop
        '';
      }
    );
}
