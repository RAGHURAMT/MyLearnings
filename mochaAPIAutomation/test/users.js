// import { describe, it } from 'node:test';
// import supertest from 'supertest';
// import {expect} from 'chai';
// var should = require('chai').should();

// const request = supertest('https://gorest.co.in/public/v2/');
// const token = 'b692576b4de28a6ad805ade1390b8b2bb57d4d39926b32969991162b706a1a5a';

// describe('Users', ()=>{ // This block will group all the tests
//     it('GET /users', ()=>{ // This block is the actual test block
//         return request.get(`users?access-token=${token}`).then((res) => {
//             should.exist(res.body);   // Using should
//             expect(res.body).to.not.to.be.empty;  //Using expect
//     });
//     });

//     it('GET /users/:id', ()=>{ // This block is the actual test block
//         const id = 6892473;
//         return request.get(`users/${id}?access-token=${token}`).then((res) => {
//             should.exist(res.body);
//             expect(res.body).to.not.to.be.empty;
//             expect(res.body.id).to.be.eq(id);
//             res.body.should.have.property('id').equal(id);
//     });
//     });

//     it('GET /users/:filterData', () => {
//         const url = `users?access-token=${token}&page=5&gender=female&status=active`;
//         return request.get(url).then((res) => {
//             expect(res.body).to.not.to.be.empty;
//             expect(res.body).to.be.an('array'); // Assert that response body is an array
//             res.body.forEach((user) => { // Iterate over each user object
//                 expect(user.gender).to.equal('female'); // Using expect
//                 expect(user.status).to.equal('active'); // Using expect
//                 user.should.have.property('gender').equal('female');     // Using should
//                 user.should.have.property('status').equal('active');  // Using should
//             });
//         });
//     });

//     it('POST /users', () => {
//         const data = {
//             email: `test${Math.floor(Math.random() * 9999)}@gmail.com`,
//             name: 'Raghu',
//             gender: 'male',
//             status: 'active'
//         };
//         return request
//                     .post('users')
//                     .set("Authorization", `Bearer ${token}`) //Here added Bearer because REST API header is started with it
//                     .send(data)
//                     .then((res) => {
//                         expect(res.body.email).to.be.eq(data.email);
//                         expect(res.body.status).to.be.eq(data.status);
//                         expect(res.body.name).to.be.eq(data.name);
//                         expect(res.body.gender).to.be.eq(data.gender);
//                         //Alternative way to validate the data
//                         expect(res.body).to.deep.include(data); // This will validate all the elements
//                         console.log(res.body);
//                      });
//     });

//     it('PUT /updateUser', () => {
//         const data = {
//             status : "active",
//             name: "Tumuluru"
//         };
//         return request
//                 .put('users/6894512')
//                 .set("Authorization", `Bearer ${token}`) 
//                 .send(data)
//                 .then((res)=>{
//                     console.log(res.body);
//                     expect(res.body).to.deep.include(data); 
//                 });
//     });

//     it('DELETE /DeleteUser', () => {
//         return request 
//                 .delete('users/6894435')
//                 .set("Authorization", `Bearer ${token}`)
//                 .then((res)=> {
//                     expect(res.body).to.be.an('object').that.is.empty;
//                 });
//     });
// });    