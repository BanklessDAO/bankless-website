*** Settings ***
Library           RequestsLibrary
Library           Collections
Resource          ../../../resources/variables.robot
Suite Setup       Create Session    api_session    ${BASE_URL}

*** Test Cases ***
# Fetch News Without Token Should Fail
#    ${headers}=    Create Dictionary
#    ${resp}=       GET On Session    api_session    /api/fetch-news    headers=${headers}    expected_status=401
#
# Fetch News With Invalid Token Should Fail
#    ${headers}=    Create Dictionary    X-Secret-Token=invalid-token
#    ${resp}=       GET On Session    api_session    /api/fetch-news    headers=${headers}    expected_status=401
