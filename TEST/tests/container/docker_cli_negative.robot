*** Settings ***
Documentation    CONTAINER negative — Docker CLI fails predictably on missing image.
Library    Process
Force Tags    CONTAINER

*** Test Cases ***
CONTAINER Negative Inspect Missing Image Is Error
    ${r}=    Run Process    docker    image    inspect    bankless-robot:nonexistent-tag-99999
    Should Not Be Equal As Integers    ${r.rc}    0
