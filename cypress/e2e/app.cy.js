describe('App Component', () => {
    it('should calculate remise and display coupures', () => {
      cy.visit('/');  // Visitez la page où se trouve le composant
  
      // Remplissez les champs
      cy.get('#prixInput').type('50');
      cy.get('#sommePayeeInput').type('100');
  
      // Cliquez sur le bouton et vérifiez les résultats
      cy.get('button').click();
      cy.get('h3').contains('Remise à rendre :');
      cy.get('p').should('have.length', 4);  // Vérifiez le nombre de coupures affichées
    });
  });
  