# Group 33's Proof of Concept Project

Welcome to Group 33's Proof of Concept Project repository for the Software Architecture and Design module at Sheffield Hallam University. This project involves creating a website using Strapi as a backend CMS and a frontend with TailwindCSS, both implemented in TypeScript.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Running / Development](#running--development)
- [Windows Guide with WSL](#windows-guide-with-wsl)

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
   After installing Nix, you need to enable flakes by adding the following configuration to your Nix configuration file (`~/.config/nix/nix.conf`):

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

## Windows Guide with WSL

### Installing WSL (Windows Subsystem for Linux)

1. Right-click on the Start button and select "Windows Terminal (Admin)" or "Windows PowerShell (Admin)" from the context menu. If prompted, enter the administrator password to proceed.
2. Run the following command to install WSL:
   ```powershell
   wsl --install
   ```
3. Restart your computer if prompted.
4. Once WSL is installed, open the Microsoft Store, search for "Ubuntu," and install it as your preferred Linux distribution.

### Setting up Your Linux Distribution

1. Launch Ubuntu from the Start menu.
2. Follow the on-screen instructions to set up your user account.

### Installing Git in WSL

1. Open your WSL terminal.
2. Run the following command to update your package list:
   ```bash
   sudo apt update
   ```
3. Install Git by running:
   ```bash
   sudo apt install git
   ```

### Installing Nix in WSL

1. Run the following command to install Nix:
   ```bash
   curl -L https://nixos.org/nix/install | sh
   ```
2. Follow the on-screen instructions to complete the installation.
3. After installation, enter the `exit` command to close your WSL terminal, then reopen Ubuntu

### Enabling nix-command and Flakes in WSL

1. Run the following commands to enable nix-command and flakes:
   ```bash
   mkdir -p ~/.config/nix
   echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
   ```

### Installing and using Visual Studio Code in WSL

1. Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).
3. Run the following command
   ```bash
   git clone https://github.com/rraafays/2024-software_architecture_and_design_task-2_proof_of_concept/
   ```

### Cloning the Project in WSL

1. Open your WSL terminal.
2. Navigate to the directory where you want to clone the project.
3. Clone the repository:

   ```bash
   git clone https://github.com/rraafays/2024-software_architecture_and_design_task-2_proof_of_concept proof_of_concept
   cd proof_of_concept
   ```
4. Open VSCode in the project directory:

   ```bash
   code .
   ```
