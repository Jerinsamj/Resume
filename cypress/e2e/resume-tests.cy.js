describe("Resume Website Tests", () => {
  beforeEach(() => {
    // Visit the resume website before each test
    cy.visit("https://jerinsamj.github.io/Resume/")
  })

  it("should load the website correctly", () => {
    // Check if the main heading is visible
    cy.contains("Good Morning, I'm Jerin!").should("be.visible")

    // Check if the subtitle is visible
    cy.contains("Experienced IT professional").should("be.visible")

    // Check if the Download Resume button is visible
    cy.contains("Download Resume").should("be.visible")
  })

  it("should have the Download Resume button clickable", () => {
    // Get the Download Resume button and click it
    cy.contains("Download Resume").click()

    // Since this is a download, we can verify the button has the correct attributes
    cy.contains("Download Resume").should("have.attr", "href").and("include", ".pdf")
  })

  it("should display Career Projects section", () => {
    cy.contains("Career Projects").should("be.visible")
    cy.contains("Custom Ticketing System").should("be.visible")
    cy.contains("Data Accessibility").should("be.visible")
  })

  it("should display Certifications section", () => {
    cy.contains("Certifications").should("be.visible")
    cy.contains("Computer Forensics").should("be.visible")
    cy.contains("CompTIA A+").should("be.visible")
  })
})

