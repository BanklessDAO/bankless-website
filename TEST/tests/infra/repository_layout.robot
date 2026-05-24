*** Settings ***
Documentation    INFRA: repository files required for build/deploy exist (no HTTP server needed).
Library    OperatingSystem

*** Test Cases ***
INFRA Positive Package Manifest Exists
    File Should Exist    ${CURDIR}/../../../package.json

INFRA Positive Next Config Exists
    File Should Exist    ${CURDIR}/../../../next.config.js

INFRA Positive Workflow Directory Exists
    Directory Should Exist    ${CURDIR}/../../../.github/workflows

INFRA Positive Dockerfile Exists For Container Pipeline
    File Should Exist    ${CURDIR}/../../../Dockerfile
