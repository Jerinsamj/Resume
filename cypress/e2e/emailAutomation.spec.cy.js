describe('Automated Interaction with Website Button', () => {
  it('should go to the website, click on the email button, and open the mail client', () => {
    // Step 1: Visit the live website
    cy.visit('https://jerinsamj.github.io/Resume/');

    // Step 2: Verify the "mailto" link is correct
    cy.get('footer .contact a')
      .eq(1)
      .should('have.attr', 'href', 'mailto:jerinsamjames1998@gmail.com');  // Check if the email link is correct

    // Step 3: Click the "mailto" link (this will trigger the mail client, though Cypress can't verify it directly)
    cy.get('footer .contact a')
      .eq(1)
      .click();

    
  });
});
