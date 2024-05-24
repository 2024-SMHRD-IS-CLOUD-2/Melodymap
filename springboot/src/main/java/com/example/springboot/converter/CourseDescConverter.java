package com.example.springboot.converter;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverter;
import com.example.springboot.entity.MelodyMap_course.CourseDesc;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

public class CourseDescConverter implements DynamoDBTypeConverter<String, List<CourseDesc>> {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convert(List<CourseDesc> courseDesc) {
        try {
            return objectMapper.writeValueAsString(courseDesc);
        } catch (IOException e) {
            throw new RuntimeException("Failed to convert course descriptions to JSON string", e);
        }
    }

    @Override
    public List<CourseDesc> unconvert(String json) {
        try {
            return objectMapper.readValue(json, new TypeReference<List<CourseDesc>>() {});
        } catch (IOException e) {
            throw new RuntimeException("Failed to convert JSON string to course descriptions", e);
        }
    }
}
