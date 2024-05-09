package com.example.springboot.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@DynamoDBTable(tableName="MelodyMap_Recommand")
public class MelodyMap {
    // constructor, getter, setter

    @DynamoDBHashKey(attributeName = "recommand_choice")
    private String recommandChoice;


    @DynamoDBAttribute(attributeName = "recommand_music")
    private List<String> recommandMusic;

    @DynamoDBAttribute(attributeName = "recommand_place")
    private List<String> recommandPlace;

}
