package api.endpoints;


//SDET-QA

public class Routes {
	
	public static String base_url = "https://petstore.swagger.io/v2";
	
	//user module
	public static String user_post_url = base_url+"/user/";
	public static String user_get_url = user_post_url+"{username}";
	public static String user_update_url = user_post_url+"{username}";
	public static String user_delete_url = user_post_url+"{username}";
	
	//pet module
	public static String pet_post_url = base_url+"/pet/";
	public static String pet_get_url = pet_post_url+"{petId}";
	public static String pet_update_url = pet_post_url+"{petId}";
	public static String pet_delete_url = pet_post_url+"{petId}";
	
	//store module
	public static String store_post_url = base_url+"/store/";
	public static String store_get_url = store_post_url+"{orderId}";
	public static String store_delete_url = store_post_url+"{orderId}";

}
