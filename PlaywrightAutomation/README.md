**cmds to run the tests**:
npx playwright test -> This will run all the files under tests folder in all the browsers in headless mode
npx playwright test homePageTests.spec.js -> This will run particular test file
npx playwright test homePageTests.spec.js --project chromium -> runs on a specific browser
npx playwright test homePageTests.spec.js --project=chromium --headed -> This will run in a headed browser
npx playwright test homePageTests.spec.js --project=chromium --headed --debug -> This will run in debug mode

**Using record and playback**:
npx playwright codegen -> to record and generate the script
npx playwright codegen --help -> To get the list of cmds used in codegen
npx playwright codegen --output tests/codegenTest.spec.js -> This will create a file and save the output directly

**Locators**:
property
CSS
XPath

**Built in Locators**:
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).