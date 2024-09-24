# guestbook

A guestbook app where users can write welcoming messages and spread positivity.

## Getting Started

First, create a `.env` file similar to [`.env.example`](./.env.example).

```bash
cp .env.example .env
```

Then, install dependencies:

```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Setting up database

Generate database migration (always generate when there is a table change).

```sh
npx drizzle-kit generate --name initial
```

Then, run your migration against the database.

```sh
npm run db:migrate
```

## License

MIT License
