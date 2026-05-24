*** Settings ***
Documentation    News page — loads; mock article from pages/api/news when using next dev/start.
Library    Browser    timeout=60s
Resource    ../../resources/variables.robot

Suite Setup       Open News Browser
Suite Teardown    Close Browser    ALL

*** Keywords ***
Open News Browser
    New Browser    headless=true    args=["--no-sandbox", "--disable-dev-shm-usage"]

*** Test Cases ***
News Page Should Load And Display Articles
    New Page    ${BASE_URL}/news
    Wait For Load State    networkidle
    Get Title    should be    BanklessDAO Community
    Wait For Elements State    h1    visible    timeout=30s
    Get Text    h1    contains    News
    Wait For Elements State    text="Example headline"    visible    timeout=30s
    Get Text    body    contains    Summary for local dev and Robot browser tests.
