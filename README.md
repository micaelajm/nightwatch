# Setup to run the test

Take into consideration that you will need Firefox 114.0.2 and Chrome 114.0.5735.198 

- Clone the repository
- Open a terminal in the repository folder and run `nvm install 16.20.1` and then `nvm use 16.20.1`
- Run `npm install`
- Run `npx nightwatch` to execute the test

# Project structure

- page-objects folder contains the page that represent the form modal
- test folder contains the test files
- By default, the test will run in chrome browser. 
