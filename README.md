# Project MGMT App

////////////////////////////////////////////////////////////////

# Development

This project incorporates graphql and apollo client.

## Getting started

- clone repository

```bash
git clone https://github.com/anthonyBosek/projectManager.git
```

- install dependencies

```bash
npm run install-modules
```

## Use

We are using `concurrently` to run server and client simultaneously. To run simultaneously.

```bash
npm run start
```

To start server individually

```bash
npm run start:server
```

To start client individually

```bash
npm run start:client
```

Server will run at `localhost:5000`

Client will run at `localhost:3000`

## Structure

MERN stack

Express server files, folders and `package.json` are at root directory of repo. Any dependencies to be installed for the backend should be added here.

```bash
npm i <packageName>
```

Frontend client was bootstrapped with `create-react-app` and is located in `<rootDir>/client`. Any dependencies to be installed for the frontend should be added to package located in `<rootDir>/client/package.json`.

```bash
cd client
npm i <packageName>
# or
cd client && npm i <packageName>
```

### Contributor

- [Anthony Bosek](anthony-bosek.vercel.app)
