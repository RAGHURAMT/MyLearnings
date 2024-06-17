/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import 'cypress-file-upload'
//npm install --save-dev cypress-file-upload

describe('File upload', ()=>{

    it('single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('example.json'); //This attachFile will only read files from the fixtures folder.
        cy.get('#file-submit').click();
    })

    it('Rename the file and upload it', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'example.json', fileName:'myfile.json'}); //This will rename and upload the file
        cy.get('#file-submit').click();
    })

    it('File upload - Drag and Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('example.json',{subjectType:'drag-n-drop'});  
        cy.get('#file-submit').click();
    })

    it('Multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['example.json', 'example.json']);
    })

    it('File Upload - shadow Dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/');
        // cy.get('parentlocator').shadow().find('childlocator').click();
        cy.get('.smart-file-upload-header',{includeShadowDom:true}).attachFile('example.json'); // The elememt is under shadow-root in html.
    })
})