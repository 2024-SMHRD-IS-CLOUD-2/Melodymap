package com.example.springboot;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.example.springboot.entity.MelodyMap2;
import com.example.springboot.entity.MelodyMap_comment;
import com.example.springboot.entity.Users;
import com.example.springboot.service.DynamoDBFindService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;

import java.io.IOException;
import java.util.*;
import java.util.function.Function;

@SpringBootApplication
public class SpringbootApplication {
	private static final Logger log = LoggerFactory.getLogger(SpringbootApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringbootApplication.class, args);
	}

	@Autowired
	private DynamoDBFindService dynamoDBFindService;

	@Autowired
	private ObjectMapper objectMapper;

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> getChoice() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String choice = null;
			if (input.containsKey("body")) {
				String bodyString = (String) input.get("body");
				Map<String, Object> body = parseJson(bodyString);
				choice = (String) body.get("choice");
			} else {
				choice = (String) input.get("choice");
			}

			if (choice == null || choice.isEmpty()) {
				log.error("Choice value is null or empty");
				return createResponse("Choice value cannot be null or empty", 400);
			}

			log.info("Received choice: {}", choice);

			Optional<MelodyMap2> result = dynamoDBFindService.findAndUpdateCount(MelodyMap2.class, choice);

			if (result.isPresent()) {
				return createResponse(result.get(), 200);
			} else {
				return createResponse("해당 항목을 찾을 수 없습니다", 404);
			}
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> addComment() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String commentTitle = getValueFromInput(input, "commentTitle");
			String author = getValueFromInput(input, "author");
			String content = getValueFromInput(input, "content");
			String date = getValueFromInput(input, "date");
			List<String> imageUrls = getValueFromInput(input, "imageUrls");

			if (commentTitle == null || commentTitle.isEmpty()) {
				log.error("Comment title is null or empty");
				return createResponse("Comment title cannot be null or empty", 400);
			}

			MelodyMap_comment newComment = new MelodyMap_comment();
			newComment.setCommentTitle(commentTitle);
			newComment.setAuthor(author);
			newComment.setContent(content);
			newComment.setDate(date);
			newComment.setImageUrls(imageUrls);

			MelodyMap_comment savedComment = dynamoDBFindService.save(newComment);
			return createResponse(savedComment != null ? "Comment added successfully" : "Failed to add comment", 200);
		};
	}


	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> deleteComment() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			String commentTitle = getValueFromInput(input, "commentTitle");
			if (commentTitle == null || commentTitle.isEmpty()) {
				return createResponse("Comment title is required", 400);
			}
			dynamoDBFindService.deleteByKey(MelodyMap_comment.class, commentTitle);
			return createResponse("Comment deleted successfully", 200);
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> getComment() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			String commentTitle = getValueFromInput(input, "commentTitle");

			if (commentTitle == null || commentTitle.isEmpty()) {
				log.error("Comment title is null or empty");
				return createResponse("Comment title cannot be null or empty", 400);
			}

			Optional<MelodyMap_comment> result = dynamoDBFindService.find(MelodyMap_comment.class, commentTitle);

			if (result.isPresent()) {
				return createResponse(result.get(), 200);
			} else {
				return createResponse("해당 항목을 찾을 수 없습니다", 404);
			}
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> scanComment() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			List<MelodyMap_comment> comments = dynamoDBFindService.findAll(MelodyMap_comment.class);

			if (!comments.isEmpty()) {
				return createResponse(comments, 200);
			} else {
				return createResponse("댓글이 없습니다", 404);
			}
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> join() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String userID = getValueFromInput(input, "UserID");
			String userPW = getValueFromInput(input, "UserPW");
			String name = getValueFromInput(input, "Name");
			String gender = getValueFromInput(input, "Gender");
			String birthday = getValueFromInput(input, "Birthday");

			if (userID == null || userID.isEmpty()) {
				log.error("UserID is null or empty");
				return createResponse("UserID cannot be null or empty", 400);
			}

			Users newUser = new Users();
			newUser.setUserID(userID);
			newUser.setUserPW(userPW);
			newUser.setName(name);
			newUser.setGender(gender);
			newUser.setBirthday(birthday);

			Users savedUser = dynamoDBFindService.save(newUser);
			return createResponse(savedUser != null ? "User joined successfully" : "Failed to join user", 200);
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> login() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String userID = getValueFromInput(input, "UserID");
			String userPW = getValueFromInput(input, "UserPW");

			if (userID == null || userID.isEmpty()) {
				log.error("UserID is null or empty");
				return createResponse("UserID cannot be null or empty", 400);
			}

			Optional<Users> userOptional = dynamoDBFindService.find(Users.class, userID);
			if (userOptional.isPresent() && userOptional.get().getUserPW().equals(userPW)) {
				Users user = userOptional.get();
				Map<String, Object> responsePayload = new HashMap<>();
				responsePayload.put("UserID", user.getUserID());
				responsePayload.put("Name", user.getName());
				responsePayload.put("Gender", user.getGender());
				responsePayload.put("Birthday", user.getBirthday());

				return createResponse(responsePayload, 200);
			} else {
				return createResponse("Login failed", 401);
			}
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> deleteUser() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			String userID = getValueFromInput(input, "UserID");
			if (userID == null || userID.isEmpty()) {
				return createResponse("UserID is required", 400);
			}
			dynamoDBFindService.deleteByKey(Users.class, userID);
			return createResponse("User deleted successfully", 200);
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> updateUserData() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String userID = getValueFromInput(input, "UserID");
			log.info("Parsed userID: {}", userID);

			List<List<Map<String, String>>> newUserResults = null;
			if (input.containsKey("body")) {
				String bodyString = (String) input.get("body");
				Map<String, Object> body = parseJson(bodyString);
				newUserResults = (List<List<Map<String, String>>>) body.get("userResult");
			} else {
				newUserResults = (List<List<Map<String, String>>>) input.get("userResult");
			}
			log.info("Parsed userResult: {}", newUserResults);

			if (userID == null || userID.isEmpty()) {
				log.error("UserID is null or empty");
				return createResponse("UserID cannot be null or empty", 400);
			}

			Optional<Users> updatedUser = dynamoDBFindService.appendUserResult(userID, newUserResults);

			if (updatedUser.isPresent()) {
				return createResponse("User data updated successfully", 200);
			} else {
				return createResponse("User not found", 404);
			}
		};
	}

	@Bean
	public Function<Message<Map<String, Object>>, Message<Object>> scanUsers() {
		return message -> {
			Map<String, Object> input = message.getPayload();
			log.info("Received input: {}", input);

			String userID = getValueFromInput(input, "UserID");
			if (userID == null || userID.isEmpty()) {
				log.error("UserID is null or empty");
				return createResponse("UserID cannot be null or empty", 400);
			}

			Optional<Users> userOptional = dynamoDBFindService.find(Users.class, userID);

			if (userOptional.isPresent()) {
				Users user = userOptional.get();
				Map<String, Object> userResponse = new HashMap<>();
				userResponse.put("UserID", user.getUserID());
				userResponse.put("Name", user.getName());
				userResponse.put("Gender", user.getGender());
				userResponse.put("Birthday", user.getBirthday());
				userResponse.put("UserResult", user.getUserResult());

				return createResponse(userResponse, 200);
			} else {
				return createResponse("사용자를 찾을 수 없습니다", 404);
			}
		};
	}

	private <T> T getValueFromInput(Map<String, Object> input, String key) {
		if (input.containsKey("body")) {
			String bodyString = (String) input.get("body");
			Map<String, Object> body = parseJson(bodyString);
			return (T) body.get(key);
		} else {
			return (T) input.get(key);
		}
	}


	private Map<String, Object> parseJson(String json) {
		try {
			return objectMapper.readValue(json, new TypeReference<Map<String, Object>>() {});
		} catch (IOException e) {
			log.error("Failed to parse JSON", e);
			return Collections.emptyMap();
		}
	}

	private Message<Object> createResponse(Object payload, int statusCode) {
		return MessageBuilder.withPayload(payload)
				.setHeader("Content-Type", "application/json")
				.setHeader("Access-Control-Allow-Origin", "*")
				.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
				.setHeader("statusCode", statusCode)
				.build();
	}
}
