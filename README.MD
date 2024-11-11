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
   git clone https://github.com/your-repo-url/2024-software_architecture_and_design_task-2_proof_of_concept.git
   cd 2024-software_architecture_and_design_task-2_proof_of_concept
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

We use the Nix package manager to create a reproducible development environment. The environment is defined in the `flake.nix` file, ensuring that all dependencies and tools are consistent across different setups. To use this, install Nix and run:

```bash
nix develop
```

This command will set up the environment as specified in `flake.nix`.

Happy coding!

