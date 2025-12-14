# Trello Clone

A full-stack Trello clone built with Next.js and Prisma.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Features

- Local-only workspace without external authentication
- Task management (create, read, update, delete tasks)
- Responsive design

## Demo

Check out the live demo: [Trello Clone](https://trello-clone-six-red.vercel.app) (link to your live demo)

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API routes, Prisma, MySQL
- **Deployment:** Vercel

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/codemononoke/trello-clone
    cd trello-clone
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up your Prisma schema (requires a local MySQL instance)
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```
    
## Environment Variables

Create a `.env` file in the root of your project and add the following variables. Clerk and Stripe are no longer required for local use.

```env
# mysql db url
DATABASE_URL=<your-db-url>

# unsplash api key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# app base url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Note:** Authentication and billing have been stubbed out for a single local workspace. A running MySQL database is required for Prisma migrations and data storage.

## Usage

1. Run the development server
    ```bash
    npm run dev
    ```

2. Open http://localhost:3000 with your browser to see the result.

## License

This project is licensed under the MIT License.
