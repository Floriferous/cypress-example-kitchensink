describe.only('window bug', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Should return undefined', () => {
    cy.getUndefined().then((maybeUndefined) => {
      console.log('maybeUndefined:', maybeUndefined)
      expect(maybeUndefined).to.equal(undefined)
    })
  })

  it('Should return null', () => {
    cy.getNull().then((maybeNull) => {
      console.log('maybeNull:', maybeNull)
      expect(maybeNull).to.equal(null)
    })
  })
})
