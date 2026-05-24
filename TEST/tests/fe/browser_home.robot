*** Settings ***
Documentation    FE browser smoke using Playwright (Robot Framework Browser). Requires `rfbrowser init` locally.
Library    Browser    timeout=60s
Resource    ../../resources/variables.robot
Force Tags    BROWSER

Suite Setup       Open Browser For Ci
Suite Teardown    Close Browser    ALL

*** Keywords ***
Open Browser For Ci
    # --no-sandbox is typical for CI/rootless Chromium; harmless locally.
    New Browser    headless=true    args=["--no-sandbox", "--disable-dev-shm-usage"]

*** Test Cases ***
FE Browser Positive Home Title Matches App Shell
    New Page    ${BASE_URL}${FE_HOME_PATH}
    Sleep    5s
    Get Title    should be    BanklessDAO Community

FE Browser Negative Unknown Route Shows Not Found
    New Page    ${BASE_URL}${NEGATIVE_PATH}
    Get Title    contains    404
