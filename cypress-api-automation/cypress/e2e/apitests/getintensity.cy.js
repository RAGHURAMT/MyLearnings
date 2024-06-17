//To get Cypress auto-suggestions, write the below command
/// <reference types = "Cypress" />  

import datafile from "../../../utils/datafile";

//npx cypress run

describe('get Carbon Intensity', () => {

    it('gets current carbon intensity data', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +'intensity',
        }).then((res)=>{
            expect(res.status).to.eq(200); //Uses chai for the assertions
            cy.log(JSON.stringify(res.body)); //To print the response
        })
    })

    it('gets carbon intensity for today', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +`intensity/date`, //Used parameterised URL
        }).then((res)=>{
            cy.log(JSON.stringify(res.body));
        })
    })

    it('gets carbon intensity for specified date', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +`intensity/date/${datafile.date}`,
        }).then((res)=>{
            cy.log(JSON.stringify(res.body));
        })
    })

    it('validate 400 response with incorrect url', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +'intencity/date',
            failOnStatusCode: false, // To pass the test if the assert cmd meets the condition
        }).then((res)=>{    
            expect(res.body.error.code).to.be.eq('400 Bad Request'); 
        })
    })

    it('validate request fails with incorrect method', async (done) => {
        await cy.request({
            method : 'POST',
            url : datafile.baseUrl +'intensity/date',
        }).then((res)=>{    
            expect(res.status).to.eq(400);
            done();   // Done is used to fail the test if assertion is failed.
        })
    })

    it('gets carbon intensity for today using loop', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +`intensity/date`,
        }).then((res)=>{
            res.body.data.forEach(data => {
                expect(data.intensity).to.be.not.empty;
            });
        })
    })

    it('Validate from date in all the results', async (done) => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl + `intensity/date/${datafile.date}`,
        }).then((res)=>{
            cy.log(JSON.stringify(res.body));
            res.body.data.forEach(data => {
                expect(data.from).contains(`${datafile.date}`);
                done(); 
            });
        })
    })

    it('gets current carbon intensity using http url', async () => {
        await cy.request({
            method : 'GET',
            url : datafile.httpUrl +'intensity',
        }).then((res)=>{
            expect(res.status).to.eq(200); //Uses chai for the assertions
            cy.log(JSON.stringify(res.body));
        })
    })

    it('validate request fails with incorrect format', async (done) => {
        await cy.request({
            method : 'GET',
            url : datafile.baseUrl +'intensity/date/forecast=231',
        }).then((res)=>{    
            expect(res.status).to.eq(400);
            done();   
        })
    })
})