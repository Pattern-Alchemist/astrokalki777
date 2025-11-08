# AstroKalki

AstroKalki is a multi-tenant SaaS demo built with Next.js 14, Supabase, and Tailwind CSS. It showcases realtime dashboards, billing adapters, OpenAPI documentation, and developer SDKs.

## Quickstart

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run seed
npm run dev
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `DATABASE_URL` | Postgres connection string |
| `PAYPAL_CLIENT_ID` | PayPal REST client id |
| `CASHFREE_CLIENT_ID` | Cashfree UPI client id |
| `UPI_HANDLE` | Generic UPI handle |

Refer to `.env.example` for the complete list.

## Key Routes

- `/` Marketing home
- `/pricing` Pricing
- `/(dashboard)` Authenticated dashboard
- `/developer/openapi.json` OpenAPI document
- `/developer/docs` Swagger UI

## Testing

```bash
npm run test
npm run test:e2e
npm run test:a11y
```

## Troubleshooting

- Ensure Postgres is running and reachable via `DATABASE_URL`.
- Payment integrations fall back to stub drivers when credentials are missing.
- Swagger UI relies on the local `/developer/openapi.json` route.
