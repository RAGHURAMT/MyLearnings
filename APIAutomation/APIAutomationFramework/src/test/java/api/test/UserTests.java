package api.test;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.Assert;
import com.github.javafaker.Faker;
import api.endpoints.UserEndPoints;
import api.payload.User;
import io.restassured.response.Response;

public class UserTests {
//	https://www.youtube.com/watch?v=a4VDgcoltBw&t=4635s&ab_channel=SDET-QA
	
	Faker faker;
	User userPayload;
	
	public Logger logger;
	
	@BeforeClass
	public void setup() {
		faker = new Faker();
		userPayload = new User();
		
		userPayload.setId(faker.idNumber().hashCode());
		userPayload.setUsername(faker.name().username());	
		userPayload.setFirstName(faker.name().firstName());
		userPayload.setLastName(faker.name().lastName());
		userPayload.setEmail(faker.internet().safeEmailAddress());
		userPayload.setPassword(faker.internet().password(5, 10));
		userPayload.setPhone(faker.phoneNumber().cellPhone());
		
		//logs
		logger = LogManager.getLogger(this.getClass());
		
	}
	
	@Test(priority=1)
	public void testPostUser() {
		logger.info("**** creating user ****");
		Response response = UserEndPoints.createUser(userPayload);
		response.then().log().all();
		
		Assert.assertEquals(response.getStatusCode(), 200);
		logger.info("**** User is created ****");
	}
	
	@Test(priority=2)
	public void testGetUserByName() {
		logger.info("**** Reading user info ****");
		Response response = UserEndPoints.readUser(this.userPayload.getUsername());
		response.then().log().all();
		Assert.assertEquals(response.getStatusCode(), 200);
		logger.info("**** User info is displayed ****");
	}
	
	@Test(priority=3)
	public void testUpdateUserByName() {
		
		//update data using userpayload
		userPayload.setFirstName(faker.name().firstName());
		userPayload.setLastName(faker.name().lastName());
		userPayload.setEmail(faker.internet().safeEmailAddress());
		
		logger.info("**** Updating user ****");
		
		Response response =  UserEndPoints.updateUser(userPayload, this.userPayload.getUsername());
		response.then().log().all();
		response.then().log().body().statusCode(200); // Chai assertion
		Assert.assertEquals(response.getStatusCode(), 200); // Testng assertion
		
		//checking data after updating
		Response responseAfterUpdate = UserEndPoints.readUser(this.userPayload.getUsername());
		responseAfterUpdate.then().log().all();
		Assert.assertEquals(responseAfterUpdate.getStatusCode(), 200);
		
		logger.info("**** User is updated ****");
	}
	
	@Test(priority=4)
	public void testDeleteUserByName() {
		
		logger.info("**** Deleting the user ****");
		
		Response response =  UserEndPoints.deleteUser(this.userPayload.getUsername());
		Assert.assertEquals(response.getStatusCode(), 200);
		
		logger.info("**** User is deleted ****");
	}

}
