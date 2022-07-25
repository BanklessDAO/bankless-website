import { pages, sizes, scrubbedElements } from '../support/options'

// export const scrubbedElements = ['.list_main__1p3RB']

describe('All: visual regression tests', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      context(`Test ${page} on ${size}`, () => {
        beforeEach(() => {
          cy.setResolution(size)
        })

        it(`Should match snapshot`, () => {
          cy.visit(`/${page}`)
          cy.matchImageSnapshot()
          // cy.matchImageSnapshot({ blackout: scrubbedElements }); // allows the hiding of dynamic components
        })
      })
    })
  })
})
