# Contributing

This document summarizes the recent changes made to the project.

## Plan A: Feature & Infrastructure Patch

- **Backend Re-enablement**: The project has been configured to support server-side rendering and API routes. The `output: "export"` option has been removed from `next.config.js`.
- **Cloudflare KV News Backend**: A new API endpoint `/api/news` has been created to serve news articles from a Cloudflare KV namespace. A cron job has been set up to fetch the news daily. The related files are in the `functions/api` directory.
- **GitHub Actions**: New GitHub Actions workflows have been created for running Cypress tests on pull requests (`.github/workflows/cypress.yml`) and for the daily news fetch cron job (`.github/workflows/cron.yml`).
- **News Section**: A new "News" section has been added to the website. The page is available at `/news` and it fetches and displays the latest news articles.
- **Design Guild Logo Update**: The Design Guild logo has been updated.
- **Cypress E2E Tests**: The Cypress E2E tests have been fixed and improved.
- **PageSpeed Optimizations**: The `pages/_document.tsx` file has been updated with preconnect and preload hints to improve page load performance.
- **Bankless Africa Podcast**: A new section for the "Bankless Africa" podcast has been added to the "Listen" page.

## Plan B: Agent Readiness & Security Update

- **RFC 8288 Link headers + Markdown content negotiation**: A middleware has been implemented to handle content negotiation for API routes. It can now serve content as either HTML or Markdown based on the `Accept` header.
- **robots.txt Content-Signal directives**: A `robots.txt` file has been created with `Content-Signal` directives to control how AI crawlers can use the website's content.
- **API Catalog + OAuth/OIDC well-known endpoints**: An API Catalog has been created at `contribution/api-catalog.md`. OIDC well-known endpoints have been created at `/.well-known/openid-configuration` and `/.well-known/jwks.json`.
- **CORS Security Analysis**: The CORS configuration has been analyzed and improved. The CORS origin has been extracted into a shared config file.
