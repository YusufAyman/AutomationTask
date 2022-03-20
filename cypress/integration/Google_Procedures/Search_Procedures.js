/// <reference types="cypress" /> 

const a = require("../../fixtures/Google_Data/Google_Data.json");
const b = require("../../fixtures/Google_Locators/Google_Locators.json");

module.exports =
{

    visitUrl: function () {
        cy.visit('/');
    },

    ValidateURL: function () {
       cy.url().should('eql', a.Data.OpenURL.URL)
       cy.screenshot()
    },

    CheckingLanguage: function () {
        cy.get(b.Language).invoke('text').then((text) => {
            expect(text).eql(a.Data.Language.ArabicVersion)
        })

        cy.get(b.Language).click()

        cy.get(b.Language).invoke('text').then((text) => {
            expect(text).eql(a.Data.Language.EnglishVersion)
        })
        cy.wait(2000)
        cy.screenshot()
    },

    CheckSearachBoxClickable: function () {
        cy.get(b.SearcchBox1).click();
        cy.wait(2000)
        cy.screenshot()
    },

    CheckingSearchFormat: function () {
        cy.get(b.SearcchBox1).clear().type(a.Data.CheckingSearchFormat.Format)
        cy.get(b.SearchButton1).click()
        cy.get(b.FormatKeyword).invoke('text').then((text) => {
            expect(text).eql(a.Data.CheckingSearchFormat.Format)
        })
        cy.screenshot()
    },

    InvalidSearchKeyword: function () {
        cy.get(b.SearchBox2).clear().type(a.Data.InvalidSearchKeyword.InvalidKeyword)
        cy.get(b.SearchButton2).click()
    },

    ValidateInvalidSearch: function(){
        cy.get(b.InvalidSearch.ShowingResultsFor).invoke('text').then((text) => {
            expect(text).eql(a.Data.InvalidSearchKeyword.CorrectWord)
        })
        
        cy.screenshot()
        
        cy.get(b.InvalidSearch.CorrectLink)
         .should('have.attr', 'href').and('include', a.Data.SearchForKeyword.Keyword).then((href) => {
              cy.visit(href)
             })
             cy.wait(2000)
             cy.screenshot()
    },

    WrongKeyword: function () {
        cy.get(b.SearchBox2).clear().type(a.Data.WrongKeyword.Wrongkeyword)
        cy.get(b.SearchButton2).click()
    },

    ValidateWrongSearch: function() {
        cy.get(b.WrongSearch.DidYouMean).invoke('text').then((text) => {
            expect(text).eql(a.Data.WrongKeyword.RightWord)
        })
        
        cy.screenshot()
        
        cy.get(b.WrongSearch.CorrectLink)
         .should('have.attr', 'href').then((href) => {
              cy.visit(href)
             })
             cy.wait(2000)
             cy.screenshot()
    },

    AutoSuggestion: function () {
        cy.get(b.SearchBox2).clear().type(a.Data.AutoSuggestion.Auto)
        cy.wait(2000)
        cy.screenshot()
        cy.get(b.AutoSuggestion.Suggestion).click()
        
        cy.get(b.AutoSuggestion.data).invoke('text').then((text) => {
            expect(text).eql(a.Data.AutoSuggestion.Type)
        })
        
        cy.screenshot()
    },

    SearchForKeyword: function () {
        cy.get(b.SearchBox2).clear().type(a.Data.SearchForKeyword.Keyword)
        
        cy.get(b.SearchButton2).click()
        
        cy.wait(2000)
        cy.screenshot()
    },

    ValidateResults: function () {

        cy.url().should('contain', a.Data.SearchForKeyword.Keyword)

        cy.get(b.ValidateResults.url).invoke('text').then((text) => {
            expect(text).eql(a.Data.ValidateResults.url)
        })

        cy.get(b.ValidateResults.CompanyName).invoke('text').then((text) => {
            expect(text).eql(a.Data.ValidateResults.CompanyName)
        })

        cy.get(b.ValidateResults.CompanyType).invoke('text').then((text) => {
            expect(text).eql(a.Data.ValidateResults.CompanyType)
        })

        cy.get(b.ValidateResults.Information).invoke('text').then((text) => {
            expect(text).contains(a.Data.ValidateResults.Information1)
        })
    },


    CheckResponseCode: function () {
        cy.request(a.Data.APIURL).then((response) => {
            expect(response).to.have.property('status', a.Data.CheckingResponseCode.StatusCode)
            expect(response.body).to.not.be.null
            cy.screenshot()
        })
    }

}