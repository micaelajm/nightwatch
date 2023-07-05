module.exports = {
    url: 'https://inhouse.decemberlabs.com/',
    elements: {
        inputCompanySelector: '[placeholder="Write your company name here"]',
        inputNameSelector: '[placeholder="Write your name here"]',
        inputEmailSelector: '[placeholder="Write your email here"]',
        inputMessageSelector: '[placeholder="Write your message here"]',
        popUpTitle: '.contact-form-heading.center',
        errorInCompanyNameField: '[placeholder="Write your company name here"].wpforms-error',
        errorInNameField: '[placeholder="Write your name here"].wpforms-error',
        errorInEmailField: '[placeholder="Write your email here"].wpforms-error',
        errorInMessaggeField: '[placeholder="Write your message here"].wpforms-error',
        validCompanyNameField: '[placeholder="Write your company name here"].wpforms-valid',
        validNameField: '[placeholder="Write your name here"].wpforms-valid',
        validEmailField: '[placeholder="Write your email here"].wpforms-valid',
        validMessageField: '[placeholder="Write your message here"].wpforms-valid',

    },
    commands: [{

        clickOnButtonByText(text) {
            return this
                .element.findByText(text).click();
        },
        waitForVisibility(selector) {
            return this.waitForElementVisible(selector);
        },
        verifyErrorInField(selector) {
            const page = this;
            // Verify that the error border of the field is red. 
            page.getCssProperty(selector, 'border', function (result) {
                page.assert.cssProperty(selector, 'border', '1px solid rgb(255, 0, 0)');
            });

            return this;
        },
        typeValues(input, value) {
            return this.setValue(input, value);
        },
        clickOnPopUpTitle() {
            return this.element.findElement('@popUpTitle').click();
        },
        verifyFieldIsValid(selector){
            return this.assert.elementPresent(selector, "The field is valid");
        },


    }]

}