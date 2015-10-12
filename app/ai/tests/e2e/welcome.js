describe('how AI should welcome user', function () {
    beforeEach(function () {
        browser.get('/#/welcome');
    });
    it('should welcome user', function () {
        expect(element(by.css('#welcome')).isDisplayed()).toBeTruthy();
    });
});
