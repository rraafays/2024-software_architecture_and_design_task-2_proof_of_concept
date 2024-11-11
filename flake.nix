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

        init = pkgs.writeShellScriptBin "init" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/ && pnpm install
        '';

        frontend = pkgs.writeShellScriptBin "frontend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/frontend/
          pnpm run develop
        '';

        backend = pkgs.writeShellScriptBin "backend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          pnpm strapi develop
        '';

        backup = pkgs.writeShellScriptBin "backup" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          pnpm strapi export
          cd $PROJECT_DIR
          mkdir -p backups
          mv backend/export_*.tar.gz.enc backups/
        '';

        restore = pkgs.writeShellScriptBin "restore" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          echo $PROJECT_DIR/backups/
          ls -l $PROJECT_DIR/backups/
          if [ -z "$1" ]; then
          echo "No backup file provided."
          exit 1
          fi
          pnpm strapi import --file $PROJECT_DIR/"$1"
        '';
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            pkgs.dialog
            init
            frontend
            backend
            backup
            restore
          ];
          shellHook = ''
            export PROJECT_DIR="$(pwd)"
          '';
        };

      }
    );
}
