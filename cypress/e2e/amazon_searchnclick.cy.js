describe('Amazon search n click', function () {
  it('Recherche une souris pour les pro gamerz et ajoute au panier', function () {

    cy.visitAmazon()

    // Cherche un article
    cy.get('#twotabsearchtextbox').type('souris gamer{enter}')

    // Clique sur le premier article
    cy.get('.s-image').first().click()

    // Ajoute l'article au panier
    cy.get('#add-to-cart-button').click()

    // Vérifie que l'article est bien dans le panier
    cy.get('#hlb-view-cart-announce').click()

  })
})