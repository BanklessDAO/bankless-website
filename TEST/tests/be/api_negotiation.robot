*** Settings ***
Documentation    BE: `/api/test-negotiation` positive (negotiated body) and negative (missing route).
Resource    ../../resources/variables.robot
Resource    ../../resources/http_keywords.robot
Suite Setup       Http Suite Setup
Suite Teardown    Http Suite Teardown

*** Test Cases ***
BE Positive Markdown Negotiation
    ${headers}=    Create Dictionary    Accept=text/markdown    x-content-type=markdown
    ${resp}=    GET On Session    site    /api/test-negotiation    headers=${headers}    expected_status=200
    Should Contain    ${resp.text}    markdown

BE Positive Html Fallback
    ${headers}=    Create Dictionary    Accept=text/html
    ${resp}=    GET On Session    site    /api/test-negotiation    headers=${headers}    expected_status=200
    Should Contain    ${resp.text}    HTML

BE Negative Missing Api Route
    GET On Session    site    /api/__robot_negative__/missing-route    expected_status=404

# BE News Api Should Return Json
#    ${resp}=    GET On Session    site    /api/news    expected_status=200
#    Should Be Equal As Strings    ${resp.headers['Content-Type']}    application/json
#    ${json}=    To Json    ${resp.content}
#    Should Be True    $json is not None
