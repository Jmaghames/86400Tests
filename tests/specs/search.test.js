import homepage from  '../pageobjects/mainpage/homepage'

describe('Search Functions - Use ebay search box', () => {
    it('Search for cars and verify the ', () => {
        homepage.open();
        homepage.searchFor("cars");
    })
})