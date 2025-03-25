describe('Portfolio Website Testing', () => {
  
  // Visit the portfolio website
  beforeEach(() => {
    cy.visit('https://jerinsamj.github.io/Resume/');
  });

  // Test for correct greeting message
  it('should display the correct greeting message based on the time of day', () => {
    const greeting = cy.get('#greeting');
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      greeting.should('have.text', "Good Morning, I'm Jerin!");
    } else if (currentTime < 18) {
      greeting.should('have.text', "Good Afternoon, I'm Jerin!");
    } else {
      greeting.should('have.text', "Good Evening, I'm Jerin!");
    }
  });

  // Test the "Download Resume" button
  it('should download the resume when the download button is clicked', () => {
    cy.get('.download-btn')
      .should('have.attr', 'href', 'https://drive.google.com/file/d/1z5XAdHEFHMaG9qu38kSh8Ul61Jg3Or4r/view?usp=sharing')
      
  });

  // Test the email contact link
  it('should open the email client when clicking on the email link', () => {
    cy.get('footer .contact a')
      .eq(1)
      .should('have.attr', 'href', 'mailto:jerinsamjames1998@gmail.com')
      

    
  });

  // Test dark mode toggle functionality
  it('should toggle dark mode when the dark mode button is clicked', () => {
    cy.get('.toggle-btn').click();
    cy.get('body').should('have.class', 'dark-mode');

    // Toggle back to light mode
    cy.get('.toggle-btn').click();
    cy.get('body').should('not.have.class', 'dark-mode');
  });

  // Test the Career Projects cards (expand/collapse)
  it('should expand and collapse project details when clicked', () => {
    cy.get('.card').eq(0).find('.expand-btn').click();
    cy.get('.card').eq(0).find('.card-details').should('be.visible');

    cy.get('.card').eq(0).find('.expand-btn').click();
    cy.get('.card').eq(0).find('.card-details').should('not.be.visible');
  });

  // Test tech icons visibility in the Career Projects section
  it('should show tech icons in Career Projects section', () => {
    cy.get('.tech-icons').should('be.visible');
    cy.get('.tech-icons i').should('have.length.greaterThan', 0);
  });

  // Test navigation through the cards in the "Skills" section
  it('should display skills cards', () => {
    cy.get('.section-title').contains('Skills').should('be.visible');
    cy.get('.cards').eq(2).find('.card').should('have.length.greaterThan', 0);
  });

  // Test the "Work Experience" cards
  it('should display work experience cards correctly', () => {
    cy.get('.section-title').contains('Work Experience').should('be.visible');
    cy.get('.cards').eq(3).find('.card').should('have.length.greaterThan', 0);
  });

  // Test Education section
  it('should display Education section with correct content', () => {
    cy.get('.section-title').contains('Education').should('be.visible');
    cy.get('.cards').eq(4).find('.card').should('have.length', 1);
  });

  // Test Footer Links - GitHub
  it('should open GitHub link when the GitHub icon is clicked', () => {
    cy.get('footer .contact a')
      .eq(0)
      .should('have.attr', 'href', 'https://github.com/Jerinsamj/Projects')
      .click();
    
  });

  // Test that the page is fully loaded
  it('should load the page successfully', () => {
    cy.url().should('eq', 'https://jerinsamj.github.io/Resume/');
    cy.title().should('eq', 'Jerin Sam James | Portfolio');
  });
});
