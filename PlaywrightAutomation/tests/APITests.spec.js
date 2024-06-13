const {test, expect} = require('@playwright/test');
const { request } = require('http');

// SDET-QA

var user_id;

test("Create user", async({request})=>{
    const response = await request.post('https://reqres.in/api/users',
                        {
                            data:{
                                "name":"Raghuram",
                                "job":"Software"
                            },
                            headers:{
                                "Accept":"application/json"
                            }
                        });
    console.log(await response.json());
    expect(response.status()).toBe(201);

    var res = await response.json();
    user_id = res.id; //Getting id from the response
});

test("Update user", async({request})=>{
    const response = await request.put('https://reqres.in/api/users/'+user_id,
                        {
                            data:{
                                "name":"Raghuram",
                                "job":"IT"
                            },
                            headers:{
                                "Accept":"application/json"
                            }
                        });
    console.log(await response.json());
    expect(response.status()).toBe(200);

});

test("Get users", async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);

});

test("Delete user", async({request})=>{  
    const response = await request.delete('https://reqres.in/api/users/'+user_id);
    expect(response.status()).toBe(204);
});