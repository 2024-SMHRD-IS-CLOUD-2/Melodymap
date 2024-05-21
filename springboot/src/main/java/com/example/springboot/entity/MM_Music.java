//package com.example.springboot.entity;
//
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@DynamoDBTable(tableName="MelodyMap_Music")
//public class MM_Music {
//
//    // constructor, getter, setter
//
//    @DynamoDBHashKey(attributeName = "music_title")
//    private String musicTitle;
//
//    @DynamoDBAttribute(attributeName = "music_genre")
//    private String musicGenre;
//
//    @DynamoDBAttribute(attributeName = "music_lyric")
//    private String musicLyric;
//
//    @DynamoDBAttribute(attributeName = "music_singer")
//    private String musicSinger;
//
//}
