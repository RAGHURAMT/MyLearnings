# This framework is built using cypress

## Getting Started

## pre-requisites:
1. Download and install node js from https://nodejs.org/en/download/
2. Once the node is installed, check the version using the following cmd in terminal
    ```sh
    node -v
    ```
3. To install the npm, run the following cmd:
    ```sh
    npm install -g npm
    ```
4. Once the npm is installed, check the version using the following cmd in terminal
    ```sh
    npm -v
    ```

## Installation
1. Clone the repo via zip file in IDE(VS Code) or navigate to the project directory in the terminal
2. Navigate to the project directory using terminal or Visual studio code and run the following cmd to install all the packages
    ```sh
    npm install
    ```
## Execution
1. Run the following commands to run the tests
    ```sh
    npx cypress open
    ```
2. Click on E2E testing inside the cypress window
3. Click on Start E2E Testing in chrome button
4. click on getintensity.cy.js file located under Specs-->cypress/e2e/apitests (Please note that all the tests are written in getintensity.cy.js file)
5. Click on each GET request to see the response
6. Click on Refresh icon(top right corner) to run all the tests again

### Framework structure
cypress-api-automation
    -cypress
        -downloads          --> Default folder created by cypress
        -e2e/apitests       --> All tests are written inside this folder
        -fixtures           --> Default folder created by cypress
        -support            --> Default folder created by cypress
    node_modules            --> Created by the node
    utils
        -common.js           --> To maintain all the common variables used in the project
        -datafile.js         --> To maintain all the data
    .env                     --> To store the USER TOKEN used for the authorization. We do not upload this file to the git for the security reasons
    cypress.config.js        --> File created by the cypress to add any additional configurations required in the  project. I added "cypress-mochawesome-reporter" to create the html reports.
    package-lock.json        --> File created by the npm
    package.json             --> File created by the npm. All the packages used in the project are mentioned in this file.

### Future possible implementations:
1. Framework supports to create the fake data which is used while creating the POST requests - https://www.npmjs.com/package/@faker-js/faker
2. Framework supports to create a html report using cypress-mochawesome-reporter
3. Framework supports integrating with Jenkins as a part of CICD. To run this project in Jenkins local, refer the below Jenkins section
4. Better folder structure will be followed based on the project requirements and methods used.

### Working with Jenkins locally:
1. Download Jenkins from https://www.jenkins.io/download/
2. Install the zip file and follow the instructions
3. Open Jenkins and click on the New item to create the freestyle project
4. Follow the instructions - https://www.guru99.com/create-builds-jenkins-freestyle-project.html