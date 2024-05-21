//package com.example.springboot.entity;
//
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.util.List;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@DynamoDBTable(tableName="MelodyMap_place")
//public class MM_Place {
//
//    @DynamoDBHashKey(attributeName = "poi_name")
//    private String poiName;
//
//    @DynamoDBAttribute(attributeName = "poi_desc")
//    private String poiDesc;
//
//    @DynamoDBAttribute(attributeName = "poi_info")
//    private String poiInfo;
//
//    @DynamoDBAttribute(attributeName = "poi_region")
//    private String poiRegion;
//
//    @DynamoDBAttribute(attributeName = "poi_tag")
//    private List<String> poiTag;
//
//    @DynamoDBAttribute(attributeName = "count")
//    private  int count;
//
//
//}
