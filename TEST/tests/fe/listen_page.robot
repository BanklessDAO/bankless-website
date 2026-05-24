*** Settings ***
Documentation    Listen page — Bankless Africa copy appears in page body (no fragile scroll).
Library    Browser    timeout=60s
Resource    ../../resources/variables.robot

Suite Setup       Open Listen Browser
Suite Teardown    Close Browser    ALL

*** Keywords ***
Open Listen Browser
    New Browser    headless=true    args=["--no-sandbox", "--disable-dev-shm-usage"]

*** Test Cases ***
Listen Page Should Display Bankless Africa Podcast
    New Page    ${BASE_URL}/listen
    Wait For Load State    networkidle
    ${body}=    Get Text    body
    Should Contain    ${body}    Bankless Africa
    Should Contain    ${body}    Exploring the world of Web3 and DeFi in Africa.
