import { before, describe, it } from "node:test";
import {expect} from 'chai';
import { createRandomUser } from "../helpers/user_helper";
import { faker } from '@faker-js/faker'; // cmd to install faker - npm install @faker-js/faker --save-dev
import request from "../config/common";
require('dotenv').config(); // This is to read token from env file

const token = process.env.token;

describe('User Posts API', () => {

    /* //Swagger documentation
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'nodeJS api project',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'https://gorest.co.in/public/v2/' // Change this to your server URL
            }
        ]
    },
    apis: ['./posts.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(3000, () => {
    console.log('Server running on https://gorest.co.in/public/v2/');
  }); */

    let userId, postId;

    before(async () => {
        userId = await createRandomUser();
    });

        /**
         * @swagger
         * Should create a new post when valid data is provided:
         *  post:
         *      Summary: This api is used to create a user
         *      description: This api is used to create a user
         *      responses:
         *          201: 
         *              description: To test Post method
         */
    it('Should create a new post when valid data is provided', async()=> {
        const data = {
            user_id : userId,
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph()
        };
        const res = await request
                .post('posts')
                .set('Authorization', `Bearer ${token}`) //Here added Bearer because REST API header is started with it
                .send(data);
        expect(res.body).to.deep.include(data);
        console.log(res.body);
        postId = res.body.id;
    });

    /**
         * @swagger
         * Should retrieve a specific post by ID:
         *  get:
         *      Summary: This api is used to retrive a user by using ID
         *      description: This api is used to retrive a user by using ID
         *      responses:
         *          200: 
         *              description: To test get method
         *              content: 
         *                  application/json
         */

    it('Should retrieve a specific post by ID', async() => {
        await request
            .get(`posts/${postId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
    });

    describe('Negative Tests', async() => {
        it('Should return 401 error when authentication fails', async() => {
            const data = {
                user_id : userId,
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph()
            };
            const res = await request
                    .post('posts')
                    // .set('Authorization', `Bearer ${token}`) //Here added Bearer because REST API header is started with it
                    .send(data);
            expect(res.body.message).to.eq('Authentication failed');
        });

        it('Should return 422 error when validation fails', async() => {
            const data = {
                user_id : userId,
                title: faker.lorem.sentence(),
                // body: 'body message'
            };
            const res = await request
                    .post('posts')
                    .set('Authorization', `Bearer ${token}`) //Here added Bearer because REST API header is started with it
                    .send(data);
            expect(res.status).to.equal(422);
            expect(res.body).to.be.an('array').that.is.not.empty;
            expect(res.body[0]).to.have.property('field', 'body');
            expect(res.body[0]).to.have.property('message', "can't be blank");
        })
    });
})