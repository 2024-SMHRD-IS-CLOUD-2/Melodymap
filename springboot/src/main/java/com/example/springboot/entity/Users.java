package com.example.springboot.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@DynamoDBTable(tableName = "Users")
public class Users {
    @DynamoDBHashKey(attributeName = "UserID")
    private String userID;

    @DynamoDBAttribute(attributeName = "UserPW")
    private String userPW;

    @DynamoDBAttribute(attributeName = "Name")
    private String name;

    @DynamoDBAttribute(attributeName = "Gender")
    private String gender;

    @DynamoDBAttribute(attributeName = "Birthday")
    private String birthday;



//    @DynamoDBRangeKey(attributeName = "Time")
//    private Long time;
}

