describe('Amazon search test', function() {
  it('Searches for a gaming mouse', function() {
    // Visitez Amazon
    cy.visit('https://www.amazon.fr/')

    // Sélectionnez la barre de recherche en utilisant son ID, tapez 'souris gamer' et appuyez sur Entrée
    cy.get('#twotabsearchtextbox').type('souris gamer{enter}')
  })
})