package api.endpoints;
import static io.restassured.RestAssured.given;

import java.util.ResourceBundle;

import api.payload.User;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

//SDET-QA
public class UserEndPoints {
	
	//This file is created to perform CRUD operations (Create, Retrieve, Update, Delete) on the USER API
	
		// This function is used to call the urls from properties file instead of reading from  Routes.java class
		static ResourceBundle getURL()
		{
			ResourceBundle routes = ResourceBundle.getBundle("routes"); //routes is the name of the properties file
			return routes;
		}
	
		public static Response createUser(User payload){
			
//			String user_post_url = getURL().getString("post_url"); --> This will read the url from properties file
			
			Response response = given()
				.contentType(ContentType.JSON)
				.accept(ContentType.JSON)
				.body(payload)
			.when()
				.post(Routes.user_post_url);
//				.post(user_post_url); --> Here we are passing the properties url 
			
			return response;
		}
		
		public static Response readUser(String userName){
			
			Response response = given()
				.pathParam("username", userName)
			.when()
				.get(Routes.user_get_url);
			
			return response;
		}
		
		public static Response updateUser(User payload, String userName){
			
			Response response = given()
				.contentType(ContentType.JSON)
				.accept(ContentType.JSON)
				.pathParam("username", userName)
				.body(payload)
			.when()
				.put(Routes.user_update_url);
			
			return response;
		}
		
		public static Response deleteUser(String userName){
			
			Response response = given()
				.pathParam("username", userName)
			.when()
				.delete(Routes.user_delete_url);
			
			return response;
		}

}
