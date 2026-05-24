import os
from pathlib import Path

BASE_URL = os.environ.get("BASE_URL", "http://localhost:3000")
FE_HOME_PATH = "/"
NEGATIVE_PATH = "/__robot_negative__/nonexistent-page-404"

# Repository root (…/TEST/resources → parents[2])
REPO_ROOT = str(Path(__file__).resolve().parents[2])
