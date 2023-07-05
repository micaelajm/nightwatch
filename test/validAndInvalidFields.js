module.exports = {
    'Testing valid and invalid data in Get in Touch form'(browser) {

        const page = browser.page.getInTouch();
        page.setWindowSize(1920, 1080);
        
        page.navigate(); //Navigate to December Labs staging environment
        page.clickOnButtonByText('Get in touch'); // Click on Get in touch button
        page.waitForVisibility('@popUpTitle'); // Wait for popup title to be visible
        page.assert.textContains('@popUpTitle', "Get In Touch") // Verify that Get In Touch is the correct title of the popup
        page.clickOnButtonByText('Send');  // Click on Send button 

        page.waitForVisibility('@errorInCompanyNameField'); // Wait for company name field to show the error in the field
        page.verifyErrorInField('@errorInCompanyNameField'); // Verify that the error border of the company name field is red. 
        page.verifyErrorInField('@errorInNameField'); // Verify that the error border of the name field is red. 
        page.verifyErrorInField('@errorInEmailField'); // Verify that the error border of the email field is red. 
        page.verifyErrorInField('@errorInMessaggeField'); // Verify that the error border of the message field is red. 

        // Take an screenshot when errors are displayed
        page.saveScreenshot('tests_output/errorsDisplayed.png')

        // Type a valid value for the company name and verify that the red border is no longer present. 
        page.typeValues('@inputCompanySelector', 'Test Company')
        page.clickOnPopUpTitle();
        page.verifyFieldIsValid('@validCompanyNameField');

        // Type a valid value for the name and verify that the red border is no longer present. 
        page.typeValues('@inputNameSelector', 'Test Company')
        page.clickOnPopUpTitle();
        page.verifyFieldIsValid('@validNameField');

        // Type a valid value for the email and verify that the red border is no longer present. 
        page.typeValues('@inputEmailSelector', 'test@yopmail.com')
        page.clickOnPopUpTitle();
        page.verifyFieldIsValid('@validEmailField');

        // Type a valid value for the message and verify that the red border is no longer present. 
        page.typeValues('@inputMessageSelector', 'Hi there! I am testing! ')
        page.clickOnPopUpTitle();
        page.verifyFieldIsValid('@validMessageField');

        // Take an screenshot when there are not errors 
        browser.saveScreenshot('tests_output/completeForm.png')
    }
}