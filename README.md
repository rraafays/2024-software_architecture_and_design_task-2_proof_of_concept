# Group 33's Proof of Concept Project

Welcome to Group 33's Proof of Concept Project repository for the Software Architecture and Design module at Sheffield Hallam University. This project involves creating a website using Strapi as a backend CMS and a frontend with TailwindCSS, both implemented in TypeScript.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Running / Development](#running--development)
- [Reproducible Environment](#reproducible-environment)

## Technologies

This project relies on the following technologies:

- **Nix**: A package manager and build system for reproducible builds and environments.
- **Node.js**: JavaScript runtime environment for running the server.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Strapi**: A headless CMS for the backend.
- **TailwindCSS**: A utility-first CSS framework for styling the frontend.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rraafays/2024-software_architecture_and_design_task-2_proof_of_concept proof_of_concept
   cd proof_of_concept
   ```

2. **Install Nix:**
   Follow the official Nix installation guide at [nixos.org](https://nixos.org/download/). This will provide detailed instructions based on your operating system.

3. **Enable Flakes:**
   After installing Nix, you need to enable flakes by adding the following configuration to your Nix configuration file (usually located at `~/.config/nix/nix.conf` on Unix systems or `%LOCALAPPDATA%\nix\profiles\default\nix.conf` on Windows):

   ```conf
   experimental-features = nix-command flakes
   ```

4. **Enter development shell:**
   With flakes enabled, navigate to your project directory and run:

   ```bash
   nix develop
   ```

## Running / Development

### Backend

To start the backend server run:

```bash
backend
```

### Frontend

To start the frontend development server run:

```bash
frontend
```

Ensure both servers are running concurrently to have the complete application up and running for development.
