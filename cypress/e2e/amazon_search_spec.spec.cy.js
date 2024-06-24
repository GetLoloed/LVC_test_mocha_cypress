describe('Amazon search test', function () {
    it('Recherche une souris pour les pro gamerz', function () {

        cy.visitAmazon()

        // Cherche un article
        cy.get('#twotabsearchtextbox').type('souris gamer{enter}')
    })
})