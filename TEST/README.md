# Robot Framework tests

Install Python 3.10+ and dependencies (recommended: virtualenv on macOS/Homebrew Python):

```bash
python3 -m venv .venv-robot
source .venv-robot/bin/activate
pip install -r TEST/requirements.txt
rfbrowser init
```

Start the Next.js app (`yarn dev` or `yarn build && yarn start`), then:

```bash
BASE_URL=http://localhost:3000 robot --outputdir TEST/results TEST/tests
```

**Playwright (browser tests):** `rfbrowser init` downloads Chromium once (similar to `npx playwright install`). CI runs this before `robot`.

**Docker image build tests** (`CONTAINER` tag) do not need the Node server; run Docker Desktop locally and:

```bash
pip install "robotframework>=7"
robot --include CONTAINER TEST/tests
```

Artifacts (`log.html`, `report.html`, `output.xml`) are written to `TEST/results/` — see `TEST/.gitignore`.

See **`devplan.md`** for tags, layers, and negative-test intent.
