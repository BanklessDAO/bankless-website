*** Settings ***
Documentation    FE smoke: HTTP-level checks against the running Next.js server (not browser UI).
Resource    ../../resources/variables.robot
Resource    ../../resources/http_keywords.robot
Suite Setup       Http Suite Setup
Suite Teardown    Http Suite Teardown

*** Test Cases ***
FE Positive Home Returns OK
    ${resp}=    GET On Session    site    ${FE_HOME_PATH}    expected_status=200
    Should Contain    ${resp.text}    html

FE Negative Unknown Route Returns Not Found
    GET On Session    site    ${NEGATIVE_PATH}    expected_status=404
