*** Settings ***
Library           RequestsLibrary
Resource          ../../../resources/variables.robot
Suite Setup       Create Session    api_session    ${BASE_URL}

*** Test Cases ***
# Test Security Headers
#    ${resp}=    GET On Session    api_session    /api/news
#    Should Be Equal As Strings    ${resp.headers['X-Content-Type-Options']}    nosniff
#    Should Be Equal As Strings    ${resp.headers['X-Frame-Options']}    SAMEORIGIN
#    Should Be Equal As Strings    ${resp.headers['Strict-Transport-Security']}    max-age=63072000; includeSubDomains; preload
