package com.example.springboot.service;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.model.AmazonDynamoDBException;
import com.example.springboot.entity.MelodyMap2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DynamoDBFindService {
    private static final Logger log = LoggerFactory.getLogger(DynamoDBFindService.class);

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    // 객체 조회 (해시 키로 조회) 및 count 값 증가
    public <T> Optional<T> findAndUpdateCount(Class<T> clazz, Object hashKey) {
        log.info("findAndUpdateCount called with hashKey: {}", hashKey);

        if (hashKey == null) {
            log.error("Hash key is null");
            return Optional.empty();
        }

        try {
            T result = dynamoDBMapper.load(clazz, hashKey);
            if (result != null && result instanceof MelodyMap2) {
                MelodyMap2 melodyMap = (MelodyMap2) result;
                melodyMap.setCount(melodyMap.getCount() + 1);
                log.info("Updating count for {} to: {}", hashKey, melodyMap.getCount());
                dynamoDBMapper.save(melodyMap);
            }
            return Optional.ofNullable(result);
        } catch (AmazonDynamoDBException e) {
            log.error("Error loading item with hashKey {}: {}", hashKey, e.getErrorMessage(), e);
            return Optional.empty();
        }
    }

    public <T> Optional<T> find(Class<T> clazz, Object hashKey) {
        log.info("find called with hashKey: {}", hashKey);

        if (hashKey == null) {
            log.error("Hash key is null");
            return Optional.empty();
        }

        try {
            T result = dynamoDBMapper.load(clazz, hashKey);
            return Optional.ofNullable(result);
        } catch (AmazonDynamoDBException e) {
            log.error("Error occurred while fetching data from DynamoDB with hashKey {}: {}", hashKey, e.getErrorMessage(), e);
            return Optional.empty();
        }
    }
    public <T> T save(T entity) {
        try {
            dynamoDBMapper.save(entity);
            return entity;
        } catch (AmazonDynamoDBException e) {
            log.error("Error saving entity: {}", e.getErrorMessage());
            return null;
        }
    }

    // 특정 키에 해당하는 항목 삭제
    public <T> void deleteByKey(Class<T> clazz, Object hashKey) {
        // 항목 조회
        T item = dynamoDBMapper.load(clazz, hashKey);

        // 항목이 존재하면 삭제
        if (item != null) {
            dynamoDBMapper.delete(item);
        }
    }
}
