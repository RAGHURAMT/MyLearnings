import { faker } from "@faker-js/faker";
import request from "../config/common";
require('dotenv').config(); // This is to read token from env file

const token = process.env.token;

export const createRandomUser = async () => {
    const data = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        gender: faker.person.sexType(),
        status: 'active'            
    };
    const res = await request
                .post('users')
                .set('Authorization', `Bearer ${token}`) //Here added Bearer because REST API header is started with it
                .send(data);
    return res.body.id;
};