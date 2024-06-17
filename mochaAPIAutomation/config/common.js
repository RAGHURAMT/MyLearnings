import supertest from 'supertest';
import qa from './qa';
const request = supertest(qa.baseURL);

export default request;
