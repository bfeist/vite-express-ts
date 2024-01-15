# Boilerplate for React / Express app written in TS

## Description

This is a modern web application boilerplate that integrates React, Vite, Express, and TypeScript. This setup provides a robust development environment with hot module replacement for the frontend and an efficient build system for both frontend and backend.

## Features

- React for building user interfaces.
- Vite (with swc) for an ultra-fast frontend development experience.
- Vite for front-end builds
- Express for API endpoints
- TypeScript for adding type safety to JavaScript.
- Esbuild for efficient backend builds.
- Proxying of api endpoints through Vite environment during development

## TODO:

- [x] Make dev env config
- [x] Working debugging for frontend / backend
- [x] Make build work locally without docker
- [ ] Routing in React
- [ ] Make docker build configs (nginx frontend server proxying api endpoints in node container)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/bfeist/vite-express-ts.git
cd vite-express-ts
npm install
```

## Usage

### Development

To start both the frontend and backend in development mode, run:

```bash
npm run dev
```

This will start the Vite development server for the frontend and the Express server for the backend concurrently.

### Build

To build the application for production:

```bash
npm run build
```

This script builds both the frontend and backend parts of the application.

### Start Production Server

After building, start the production server with:

```bash
npm run start
```

## Structure

- `src/`: Contains the source code for the React frontend.
- `src/server/`: Contains the source code for the Express backend.
- `.local/vite/dist`: Destination for the built frontend files.
- `.local/express/dist`: Destination for the built backend server files.
