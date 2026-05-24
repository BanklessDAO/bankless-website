# Robot Framework devplan — bankless-website

Tests live under `TEST/tests/` and target **positive** (happy path) and **negative** (failure / absence) scenarios across layers.

## Scope matrix

| Layer | Suite | Tags | Positive examples | Negative examples |
|--------|--------|------|-------------------|-------------------|
| **FE — HTTP** | `tests/fe/http_home.robot` | — | GET `/` returns 200 and HTML | Bogus path → 404 |
| **FE — Browser** | `tests/fe/browser_home.robot` | `BROWSER` | Home title `BanklessDAO Community` | Unknown route title contains `404` |
| **FE — Listen** | `tests/fe/listen_page.robot` | — | `/listen` body contains Bankless Africa copy | — |
| **FE — News** | `tests/fe/news_page.robot` | — | `/news` loads mock article (`pages/api/news` in dev) | — |
| **BE** | `tests/be/api_negotiation.robot` | — | Markdown/HTML negotiation on `/api/test-negotiation` | Missing API route → 404 |
| **INFRA** | `tests/infra/repository_layout.robot` | — | `package.json`, `next.config.js`, workflows, `Dockerfile` exist | — |
| **CONTAINER** | `tests/container/docker_build.robot` | `CONTAINER` | `docker build` succeeds | — |
| **CONTAINER** | `tests/container/docker_cli_negative.robot` | `CONTAINER` | — | `docker image inspect` missing tag → non‑zero exit |

## Execution

### Full suite (local)

```bash
pip install -r TEST/requirements.txt
rfbrowser init
BASE_URL=http://localhost:3000 robot --outputdir TEST/results TEST/tests
```

### Split by tag (matches CI)

- App / UI stack (starts Next.js, excludes Docker image build):

  `robot --exclude CONTAINER --outputdir TEST/results-app TEST/tests`

- Container only (no Node server; needs Docker daemon):

  `robot --include CONTAINER --outputdir TEST/results-container TEST/tests`

## Selenium

This repo uses **Playwright** via [`robotframework-browser`](https://github.com/MarketSquare/robotframework-browser). **SeleniumLibrary** is not wired; if you need Selenium Grid, add `robotframework-seleniumlibrary` and a separate workflow job.

## CI

- `.github/workflows/robot-framework.yml` — job **`robot-app`** (HTTP + browser + infra) and job **`robot-container`** (Docker build + CLI negative test).
