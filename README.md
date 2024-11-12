# Group 33's Proof of Concept Project

Welcome to Group 33's Proof of Concept Project repository for the Software Architecture and Design module at Sheffield Hallam University. This project involves creating a website using Strapi as a backend CMS and a frontend with TailwindCSS, both implemented in TypeScript.

## Table of Contents

- [Quick Start](#quick-start)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Running / Development](#running--development)
- [Reproducible Environment](#reproducible-environment)

## Quick Start

To quickly start the project, clone the repository and follow the setup instructions provided below to install dependencies and run the project locally.

## Dependencies

This project relies on the following technologies:

- **Strapi**: A headless CMS for the backend.
- **TailwindCSS**: A utility-first CSS framework for styling the frontend.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Node.js**: JavaScript runtime environment for running the server.
- **Nix**: A package manager and build system for reproducible builds and environments.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rraafays/2024-software_architecture_and_design_task-2_proof_of_concept proof_of_concept
   cd proof_of_concept
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

## Running / Development

### Backend

To start the backend server, navigate to the `backend` directory and run:

```bash
npm run develop
```

### Frontend

To start the frontend development server, navigate to the `frontend` directory and run:

```bash
npm run serve
```

Ensure both servers are running concurrently to have the complete application up and running for development.

## Reproducible Environment

To create a reproducible development environment, we utilize the Nix package manager. Nix ensures consistent dependencies and tools across different setups. Follow these steps to install Nix and enable flakes, as they are not supported out-of-the-box:

1. **Install Nix:**
   Follow the official Nix installation guide at [nixos.org](https://nixos.org/download/). This will provide detailed instructions based on your operating system.

2. **Enable Flakes:**
   After installing Nix, you need to enable flakes by adding the following configuration to your Nix configuration file (usually located at `~/.config/nix/nix.conf` on Unix systems or `%LOCALAPPDATA%\nix\profiles\default\nix.conf` on Windows):

   ```conf
   experimental-features = nix-command flakes
   ```

3. **Develop with Nix:**
   With flakes enabled, navigate to your project directory and run:

   ```bash
   nix develop
   ```

This command will set up the development environment as specified in the `flake.nix` file, ensuring all dependencies and tools are consistent.
