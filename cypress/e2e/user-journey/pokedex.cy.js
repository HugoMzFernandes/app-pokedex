describe('Pokedex user journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  Cypress.Commands.add('Get_Elements_In_Pokedex_Home', () => {
    cy.get('h1').should('have.text', 'Pokedex')
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  }) 

  it('displays home screen', () => {
    cy.Get_Elements_In_Pokedex_Home()
  })

  it('displays home screen with initial state', () => {
    cy.Get_Elements_In_Pokedex_Home()
    cy.get('svg').should('be.visible')
    cy.get('p').should('have.text', "Type pokemon's name and click enter to search.")
  })

  it('displays home screen with not found state', () => {
    cy.Get_Elements_In_Pokedex_Home()
    cy.get('input').type('Blastoichu')
    cy.get('input').type('{enter}')
    cy.get('svg').should('be.visible')
    cy.get('p').should('have.text', "No result found")
  })

  it('displays home screen with found pokemon state', () => {
    cy.Get_Elements_In_Pokedex_Home()
    cy.get('input').type('Pikachu')
    cy.get('input').type('{enter}')
    cy.get('.loading').should('be.visible')
    cy.get('.pokemon-detail').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('.name').should('be.visible')
    cy.get('.types').should('be.visible')
    cy.get('.stats').should('be.visible')
  })

  it('displays home screen with loading state', () => {
    cy.Get_Elements_In_Pokedex_Home()
    cy.get('input').type('Pikachu')
    cy.get('input').type('{enter}')
    cy.get('.loading').should('be.visible')
    cy.get('input').should('be.disabled')
    cy.get('button').should('be.disabled')
    cy.get('.animate-spin').should('be.visible')
  })

  it('return to initial state', () => {
    cy.Get_Elements_In_Pokedex_Home()
    cy.get('input').type('Pikachu')
    cy.get('input').type('{enter}')
    cy.get('input', { timeout: 800 }).clear()
    cy.get('input').type('{enter}')
    cy.get('p').should('have.text', "Type pokemon's name and click enter to search.")
  })

})
