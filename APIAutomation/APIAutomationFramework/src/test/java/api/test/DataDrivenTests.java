package api.test;

import org.testng.annotations.Test;
import org.testng.AssertJUnit;
import api.endpoints.UserEndPoints;
import api.payload.User;
import api.utilities.DataProviders;
import io.restassured.response.Response;

public class DataDrivenTests {
	
	@Test(priority=1, dataProvider="Data", dataProviderClass=DataProviders.class)
	public void testPostuser(String userId, String userName, String fname, String lname, String email, String pwd, String phone) {
		
		User userPayload = new User();
		
		userPayload.setId(Integer.parseInt(userId));
		userPayload.setUsername(userName);
		userPayload.setFirstName(fname);
		userPayload.setLastName(lname);
		userPayload.setEmail(email);
		userPayload.setPassword(pwd);
		userPayload.	setPhone(phone);
		
		Response response = UserEndPoints.createUser(userPayload);
		AssertJUnit.assertEquals(response.getStatusCode(), 200);
	}
	
	@Test(priority=2, dataProvider="UserNames", dataProviderClass=DataProviders.class)
	public void testDeleteUserByName(String UserName) {
				
		Response response = UserEndPoints.deleteUser(UserName);
		AssertJUnit.assertEquals(response.getStatusCode(), 200);
	}

}
