describe('homepage', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb8fd1526dfe49a9bb26987581f25e22", {
      statusCode: 200,
      fixture: "newsArticles"
    })
    .as("getAllNews")
    .visit('http://localhost:3000')
    cy.wait("@getAllNews")
  })

  it("should display homepage elements and navigate to article details", () => {
    cy.get("header").should("exist")
      .get('h1').contains("Pulse News")
      .get('form').should("exist")
      .get('.articles-wrapper .article-link-wrapper').should('have.length', 5)
      .get('.articles-wrapper .article-link-wrapper').first().within(() => {
        cy.get(".article-container").as('articleContainer')
        cy.get('@articleContainer').find(".article-date").contains("Published on: 19-11-2023")
        cy.get('@articleContainer').find(".article-headline").contains("Israel says soldier executed, foreign hostages held at Gaza's Shifa hospital - Reuters")
        cy.get('@articleContainer').find(".article-description").contains("Israel stepped up accusations of Hamas abuses at the Gaza Strip's biggest hospital on Sunday, saying a captive soldier had been executed and two foreign hostages held at a site that has been a focus of its devastating six-week-old offensive.")
      })
      .get('.articles-wrapper .article-link-wrapper').first().find(".article-image").should('exist')
      .get('.articles-wrapper .article-link-wrapper').last().within(() => {
        cy.get(".article-container").as('articleContainer')
        cy.get('@articleContainer').find(".article-date").contains("Published on: 19-11-2023")
        cy.get('@articleContainer').find(".article-headline").contains("Patrick Mahomes Says Taylor Swift and Travis Kelce's Romance is a 'Huge Deal' - Entertainment Tonight")
        cy.get('@articleContainer').find(".article-description").contains("The Kansas City Chiefs quarterback says their relationship is not a distraction.")
      })
      .get('.articles-wrapper .article-link-wrapper').last().find(".article-image").should('exist')
      .click()
  })
})
