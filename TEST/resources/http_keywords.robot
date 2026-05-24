*** Settings ***
Library    RequestsLibrary

*** Keywords ***
Http Suite Setup
    Create Session    site    ${BASE_URL}    disable_warnings=1

Http Suite Teardown
    Delete All Sessions
