# Cloudflare Pages Functions

Serverless endpoints for the bankless-website. Each `.ts` file under `functions/` compiles to a Cloudflare Pages Function at the corresponding URL path.

## Endpoints

| File | URL | Purpose |
|------|-----|---------|
| `api/news.ts` | `GET /api/news` | Return cached news articles from KV |
| `api/news-cron.ts` | cron trigger | Stub for hourly cron (see fetch-news.ts) |
| `api/fetch-news.ts` | `GET /api/fetch-news` + scheduled | Fetch RSS and populate KV |

## KV Namespace Setup

1. Go to **Cloudflare Dashboard → Workers & Pages → KV → Create namespace** (name it `NEWS_KV`).
2. Copy the namespace ID and replace `YOUR_KV_NAMESPACE_ID` in `wrangler.toml`.
3. In **Pages → bankless-website → Settings → Functions → KV namespace bindings**, add: Variable `NEWS_KV` → the namespace you created.

## Cron Trigger

Set up in **Pages → Settings → Functions → Cron Triggers**: schedule `0 * * * *` (hourly).

## Local Development

```bash
npx wrangler pages dev .next --kv NEWS_KV
```
