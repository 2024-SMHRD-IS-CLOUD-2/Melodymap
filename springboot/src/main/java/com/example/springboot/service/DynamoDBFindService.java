package com.example.springboot.service;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.AmazonDynamoDBException;
import com.example.springboot.controller.ReactSpringController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DynamoDBFindService {
    private static final Logger log = LoggerFactory.getLogger(ReactSpringController.class);

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    // 객체 조회 (해시 키로 조회)
    public <T> Optional<T> find(Class<T> clazz, Object hashKey) {
        try {
            T result = dynamoDBMapper.load(clazz, hashKey);
            return Optional.ofNullable(result);
        } catch (AmazonDynamoDBException e) {
            log.error(e.getErrorMessage());
            return Optional.empty();
        }
    }
}
