# dashboard

a responsive next.js dashboard with charts, authentication, and user management features.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `public/` - Static assets

## Features

- api
- authentication
- charts
- user_management

## Architecture Decisions

- Using NextAuth.js for authentication
- Using Next.js API routes for backend functionality
- API: Using Next.js App Router API routes
- Authentication: Using NextAuth.js with credentials provider
- Performance: Using Next.js Image component, dynamic imports, and caching strategies

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com).

## Source of Truth

See `/dudex/canon.json` for the canonical build specification.
