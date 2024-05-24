package com.example.springboot.converter;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverter;
import com.example.springboot.entity.MelodyMap_course.Course;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

public class CoursesConverter implements DynamoDBTypeConverter<String, List<Course>> {
    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convert(List<Course> courses) {
        try {
            return objectMapper.writeValueAsString(courses);
        } catch (IOException e) {
            throw new RuntimeException("Failed to convert courses to JSON string", e);
        }
    }

    @Override
    public List<Course> unconvert(String json) {
        try {
            return objectMapper.readValue(json, new TypeReference<List<Course>>() {});
        } catch (IOException e) {
            throw new RuntimeException("Failed to convert JSON string to courses", e);
        }
    }
}
