describe('page', () => {
  for (let index = 0; index < 1000; index++) {
    it(`works ${index}`, () => {
      cy.intercept("/orchestrator/v1/logout").as("postLogout");
    })
  }
})
