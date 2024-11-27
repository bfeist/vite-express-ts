# Take Home Challenge

## Description

Includes:

- An account creation form that allows a user to provide a username and password to create
  an account.
- A login form that allows a user to login.
- A profile page that displays the user's name and allows the user to logout.

## Installation

1. Create a `.env` file by copying `.env.sample` to `.env`
2. Run `npm install`
3. Run `npm run copy:better_sqlite3.node`

## Usage

### Development

To start both the frontend and backend in development mode, run:

```bash
npm run dev
```

This will start the Vite development server for the frontend and the Express server for the backend concurrently.

Available at `http://localhost:5100`

### Build

To build the application for production:

```bash
npm run build
```

This script builds both the frontend and backend parts of the application. The result is put in `.local/vite/dist`and `.local/express/dist` respectively.

### Start Production Server

After building, start the production server with:

```bash
npm run start
```

This runs a simple `node ./.local/express/dist/api.js` command to start the express server that serves the `/api/v1` endpoints.

## Structure

- `src/`: Contains the source code for the React frontend.
- `src/server/`: Contains the source code for the Express backend.
- `.local/vite/dist`: Destination for the built frontend files.
- `.local/express/dist`: Destination for the built backend server files.
