//package com.example.springboot.service;
//
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
//import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
//import com.amazonaws.services.dynamodbv2.model.AmazonDynamoDBException;
//import com.example.springboot.entity.MelodyMap_result;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CountUpdateService {
//
//    private static final Logger log = LoggerFactory.getLogger(CountUpdateService.class);
//
//    @Autowired
//    private DynamoDBMapper dynamoDBMapper;
//
//    // MBTI 결과의 count를 증가시키는 메소드
//    public boolean incrementCount(String resultChoice) {
//        try {
//            // 결과 항목 불러오기
//            MelodyMap_result result = dynamoDBMapper.load(MelodyMap_result.class, resultChoice);
//            if (result != null) {
//                // count 값을 증가시키고 저장
//                int currentCount = result.getCount();
//                result.setCount(currentCount + 1);
//                dynamoDBMapper.save(result, DynamoDBMapperConfig.SaveBehavior.UPDATE_SKIP_NULL_ATTRIBUTES.config());
//                return true;
//            } else {
//                log.info("No result found for the given choice: " + resultChoice);
//                return false;
//            }
//        } catch (AmazonDynamoDBException e) {
//            log.error("Failed to increment count for choice " + resultChoice + ": " + e.getErrorMessage());
//            return false;
//        }
//    }
//}
