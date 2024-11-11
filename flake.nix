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

        frontend = pkgs.writeShellScriptBin "frontend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/frontend/
          pnpm install
          pnpm run develop
        '';

        backend = pkgs.writeShellScriptBin "backend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          pnpm install
          pnpm strapi develop
        '';

        export-database = pkgs.writeShellScriptBin "export-database" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          pnpm install
          pnpm strapi export
          cd $PROJECT_DIR
          mkdir -p database_backups
          mv backend/export_*.tar.gz.enc database_backups/
        '';

        import-database = pkgs.writeShellScriptBin "import-database" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          echo $PROJECT_DIR/database_backups/
          ls $PROJECT_DIR/database_backups/
          if [ -z "$1" ]; then
          echo "No backup file provided."
          exit 1
          fi
          pnpm install
          pnpm strapi import --file "$1"
        '';
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            pkgs.dialog
            frontend
            backend
            export-database
            import-database
          ];
          shellHook = ''
            export PROJECT_DIR="$(pwd)"
          '';
        };

      }
    );
}
