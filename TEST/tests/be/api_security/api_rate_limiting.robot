*** Settings ***
Library           RequestsLibrary
Library           Collections
Resource          ../../../resources/variables.robot
Suite Setup       Create Session    api_session    ${BASE_URL}

*** Test Cases ***
# Test Rate Limiting
#    FOR    ${i}    IN RANGE    100
#        ${resp}=    GET On Session    api_session    /api/news    expected_status=200
#    END
