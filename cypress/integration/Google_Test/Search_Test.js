/// <reference types="cypress" /> 

var a = require("../../integration/Google_Procedures/Search_Procedures.js");

beforeEach (()=>{
    a.visitUrl('/')
})

describe('SearchingTask', function () {

    it("EndToEndSearchingScenario", function () {

        a.ValidateURL()
        a.CheckingLanguage()
        a.CheckSearachBoxClickable()
        a.CheckingSearchFormat()
        a.InvalidSearchKeyword()
        a.ValidateInvalidSearch()
        a.WrongKeyword()
        a.ValidateWrongSearch()
        a.AutoSuggestion()
        a.SearchForKeyword()
        a.ValidateResults()
    })

    it("APISearchResponseCode", function () {

        a.CheckResponseCode()

    })
})