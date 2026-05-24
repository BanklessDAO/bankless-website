import { pages, sizes } from '../support/options'

// export const scrubbedElements = ['.list_main__1p3RB']

describe('All visual regression tests', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      // Use a human-readable label for the snapshot name.
      // The homepage '/' becomes 'home' to avoid an empty label in snapshot filenames.
      const label = page === '/' ? 'home' : page.replace(/^\//, '')

      context(`Test ${label} on ${size}`, () => {
        beforeEach(() => {
          cy.setResolution(size)
        })

        it(`Should match snapshot`, () => {
          cy.visit(page)
          cy.matchImageSnapshot()
          // cy.matchImageSnapshot({ blackout: scrubbedElements }); // allows the hiding of dynamic components
        })
      })
    })
  })
})
