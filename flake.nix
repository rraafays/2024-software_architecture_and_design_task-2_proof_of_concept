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
          export TIMESTAMP=$(date +%Y%m%d%H%M%S)
          mkdir -p backups/$TIMESTAMP
          mv $(ls -1 backend/export_*.tar.gz.enc | sort -r | head -n 1) backups/$TIMESTAMP/strapi.tar.gz.enc
          cp backend/database.db backups/$TIMESTAMP/database.db
        '';

        restore = pkgs.writeShellScriptBin "restore" ''
          #!${pkgs.bash}/bin/bash
          cd $PROJECT_DIR/backend/
          if [ -z "$1" ]; then
          echo -e "No backup directory provided"
          lsd --tree $PROJECT_DIR/backups/
          exit 1
          fi
          echo $PROJECT_DIR/"$1"
          pnpm strapi import --file $PROJECT_DIR/"$1"/strapi.tar.gz.enc
          cp $PROJECT_DIR/"$1"/database.db $PROJECT_DIR/backend/database.db
        '';

        backups = pkgs.writeShellScriptBin "backups" ''
          #!${pkgs.bash}/bin/bash
          lsd --tree $PROJECT_DIR/backups/
        '';
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.pnpm
            pkgs.lsd
            init
            frontend
            backend
            backup
            restore
            backups
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
            export DATABASE_FILENAME=database.db
            export JWT_SECRET=APHvSmKM5qD68FY8utznJQ==

            echo
            echo "2024, Sheffield Hallam University, Software Architecture & Design, Task 2: Proof of Concept. Development Shell. Configuration written by Raf Shahid: C0042249"
            echo
            echo "PROJECT_DIR=$PROJECT_DIR"
            echo "HOST=$HOST"
            echo "PORT=$PORT"
            echo "APP_KEYS=$APP_KEYS"
            echo "API_TOKEN_SALT=$API_TOKEN_SALT"
            echo "ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET"
            echo "TRANSFER_TOKEN_SALT=$TRANSFER_TOKEN_SALT"
            echo "DATABASE_CLIENT=$DATABASE_CLIENT"
            echo "DATABASE_SSL=$DATABASE_SSL"
            echo "DATABASE_FILENAME=$DATABASE_FILENAME"
            echo "JWT_SECRET=$JWT_SECRET"
            echo
          '';
        };

      }
    );
}
