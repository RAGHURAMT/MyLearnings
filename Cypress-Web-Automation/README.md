<!-- To run all the spec files -->
npx cypress run 

<!-- To run in headed -->
npx cypress run --headed

<!-- To run a specific spec file -->
npx cypress run --spec cypress/e2e/MyFirstTest.cy.js

<!-- To run in a specific browser (Default bowser is Electron )-->
npx cypress run --browser chrome

<!-- To run in a specific browser in headed mode-->
npx cypress run --browser chrome --headed

$ -> this is like cy.get (like driver.findElement). But to use this, we need to do --> install npm install jquery and import $ from 'jquery';
$$ --> To get multiple elements(like findElements). This will return an array of elements 