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
      .get('.articles-wrapper .article-link-wrapper').first().find(".article-image").should('be.visible')
      .get('.articles-wrapper .article-link-wrapper').last().within(() => {
        cy.get(".article-container").as('articleContainer')
        cy.get('@articleContainer').find(".article-date").contains("Published on: 19-11-2023")
        cy.get('@articleContainer').find(".article-headline").contains("Patrick Mahomes Says Taylor Swift and Travis Kelce's Romance is a 'Huge Deal' - Entertainment Tonight")
        cy.get('@articleContainer').find(".article-description").contains("The Kansas City Chiefs quarterback says their relationship is not a distraction.")
      })
      .get('.articles-wrapper .article-link-wrapper').last().find(".article-image").should('be.visible')
      .click()
      .url().should('eq', 'http://localhost:3000/article/4')
      .get('h1').contains("Pulse News")
      .get('.detail-headline-and-img .detail-headline').contains("Patrick Mahomes Says Taylor Swift and Travis Kelce's Romance is a 'Huge Deal' - Entertainment Tonight")
      .get('.detail-headline-and-img .detail-image').should("be.visible")
      .get('.article-content').contains("Patrick Mahomes is following Taylor Swift and Travis Kelce's love story! On Sunday, the Kansas City Chiefs quarterback sat down with ESPN ahead of the team's rematch game against the Philadelphia E… read on at Entertainment Tonight.")
      .get('.source-link').contains("read on at Entertainment Tonight.")
  })

  // it("should handle server error", () => {
  //   cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=cb8fd1526dfe49a9bb26987581f25e22", {
  //     statusCode: 400,
  //     body: ""
  //   })
  //   .as("getAllNews")
  //   .visit('http://localhost:3000')
  //   cy.wait("@getAllNews")
  // })
})