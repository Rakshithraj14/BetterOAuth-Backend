# BetterOAuth Backend

## Description
BetterOAuth Backend is an application designed to provide secure and efficient OAuth authentication services. It is built using TypeScript and leverages modern tools and libraries for development and deployment.

## Features
- OAuth authentication with `better-auth`
- Database migrations and schema management using `drizzle-kit`
- TypeScript for type-safe development
- Dockerized for easy deployment

## Project Structure
```
BetterOAuth-backend
├── auth-client.ts
├── auth.ts
├── database.ts
├── Dockerfile
├── drizzle.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── drizzle/
│   ├── 0000_melodic_pride.sql
│   └── meta/
│       ├── _journal.json
│       └── 0000_snapshot.json
├── src/
│   ├── index.ts
│   ├── server.ts
│   ├── db/
│   │   └── schema.ts
│   └── routes/
│       ├── auth.routes.ts
│       └── protected.routes.ts
```

## Prerequisites
- Node.js (v20 or higher)
- pnpm (for package management)
- Docker (for containerized deployment)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd BetterOAuth-backend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

## Scripts
The following scripts are available in the `package.json`:
- `dev`: Start the development server with hot-reloading.
- `start`: Start the production server.
- `build`: Compile the TypeScript code.
- `migrate`: Run database migrations using `drizzle-kit`.
- `generate`: Generate database schema using `drizzle-kit`.
- `studio`: Open the `drizzle-kit` studio for database management.

## Development
To start the development server:
```bash
pnpm run dev
```

## Building the Project
To build the project:
```bash
pnpm run build
```

## Running in Production
1. Build the project:
   ```bash
   pnpm run build
   ```
2. Start the production server:
   ```bash
   pnpm start
   ```

## Docker Deployment
1. Build the Docker image:
   ```bash
   docker build -t betteroauth-backend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 betteroauth-backend
   ```
   
## License
This project is licensed under the ISC License.