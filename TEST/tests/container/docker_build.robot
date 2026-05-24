*** Settings ***
Documentation    CONTAINER positive — production image builds (requires Docker daemon).
Library    Process
Resource    ../../resources/variables.robot
Force Tags    CONTAINER

*** Test Cases ***
# CONTAINER Positive Docker Image Builds
#    ${r}=    Run Process
#    ...    docker
#    ...    build
#    ...    -t
#    ...    bankless-website:robot
#    ...    .
#    ...    cwd=${REPO_ROOT}
#    ...    shell=False
#    ...    timeout=20 minutes
#    Should Be Equal As Integers    ${r.rc}    0
