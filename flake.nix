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
        backend = pkgs.writeShellScriptBin "backend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          pnpm install
          pnpm run develop
        '';
        frontend = pkgs.writeShellScriptBin "frontend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/frontend/
          pnpm install
          pnpm run develop
        '';
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            backend
            frontend
          ];
          shellHook = ''
            export PROJECT_DIR="$(pwd)"
          '';
        };

      }
    );
}
