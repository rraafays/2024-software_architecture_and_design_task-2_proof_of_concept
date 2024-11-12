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
          echo $PROJECT_DIR/backend/
          cd $PROJECT_DIR/backend/ && pnpm install
          echo
          echo $PROJECT_DIR/frontend/
          cd $PROJECT_DIR/frontend/ && pnpm install
        '';

        frontend = pkgs.writeShellScriptBin "frontend" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/frontend/
          pnpm next dev --turbopack
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
            export HOST=0.0.0.0
            export PORT=1337
            export APP_KEYS=TRlbMBSMOZ1TQV5CevOjAA==,x3nHmUiDhib8NeTtDDanjg==,/HeZIEYgTN4XhClU7E7pgA==,3II6NqXxNq3Av0X2xkYH6Q==
            export API_TOKEN_SALT=OIVz+gPSkAWc6aqBh+sW7A==
            export ADMIN_JWT_SECRET=xVp1ubf+HHc+JZVQ+m9NEA==
            export TRANSFER_TOKEN_SALT=OCkd7KJ6zU2K4RpEaCQA4A==
            export DATABASE_CLIENT=sqlite
            export DATABASE_HOST=
            export DATABASE_PORT=
            export DATABASE_NAME=
            export DATABASE_USERNAME=
            export DATABASE_PASSWORD=
            export DATABASE_SSL=false
            export DATABASE_FILENAME=.tmp/data.db
            export JWT_SECRET=APHvSmKM5qD68FY8utznJQ==

            echo
            echo "2024, Sheffield Hallam University, Software Architecture & Design, Task 2: Proof of Concept. Development Shell. Configuration written by Raf Shahid: C0042249"
            echo
          '';
        };

      }
    );
}
