describe('Inscription Amazon', function() {
  it('inscription Amazon', function() {
  cy.visitAmazon()

    // Appuie sur le bouton pour se connecter
    cy.get('#nav-link-accountList-nav-line-1').click()

    // Remplis le champ email
    cy.get('#ap_email').type('testemail@xd.fr')

    // Appuie sur le bouton pour continuer
    cy.get('#continue').click()

    // Clique sur le bouton pour créer un compte
    cy.get('#createAccountSubmit').click()

    // Remplis le champ nom
    cy.get('#ap_customer_name').type('John Doe')

    // Remplis le mail
    cy.get('#ap_email').type('testmail@xd.fr')

    // Remplis le mot de passe
    cy.get('#ap_password').type('testpassword')

    // Remplis la confirmation du mot de passe
    cy.get('#ap_password_check').type('testpassword')

    // Appuie sur le bouton pour créer le compte
    cy.get('#continue').click()
  })
})