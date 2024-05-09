package com.example.springboot.controller;

import com.example.springboot.entity.MM_Music;
import com.example.springboot.entity.MM_Place;
import com.example.springboot.entity.MelodyMap;
import com.example.springboot.service.DynamoDBFindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class MelodyMapController {

    @Autowired
    private DynamoDBFindService dynamoDBFindService; // 서비스 의존성 주입

    @GetMapping("/submit")
    public ResponseEntity<Map<String, Object>> recommandResult(@RequestParam String choice) {
        // 사용자 선택에 따른 기본 데이터 조회
        Optional<MelodyMap> result = dynamoDBFindService.find(MelodyMap.class, choice);
        if (result.isPresent()) {
            Map<String, Object> response = new HashMap<>();

            // Place 정보를 조회하여 상세 데이터 제공
            List<String> placeIds = result.get().getRecommandPlace();
            List<MM_Place> placesInfo = placeIds.stream()
                    .map(placeId -> dynamoDBFindService.find(MM_Place.class, placeId).orElse(null)) // 각 장소 ID에 대해 상세 정보 조회
                    .filter(place -> place != null) // null이 아닌 결과만 수집
                    .collect(Collectors.toList());
            response.put("placeDetails", placesInfo); // 조회된 Place 정보들을 응답에 추가

            // Music 정보를 조회하여 각 트랙의 상세 정보 제공
            List<String> musicTitles = result.get().getRecommandMusic();
            List<MM_Music> musicDetails = musicTitles.stream()
                    .map(title -> dynamoDBFindService.find(MM_Music.class, title).orElse(null)) // 각 음악 제목에 대해 상세 정보 조회
                    .filter(music -> music != null) // null이 아닌 결과만 수집
                    .collect(Collectors.toList());
            response.put("musicDetails", musicDetails); // 조회된 Music 정보를 응답에 추가

            return ResponseEntity.ok(response); // 최종 응답 구성 및 반환
        } else {
            return ResponseEntity.notFound().build(); // 조회된 데이터가 없는 경우 Not Found 응답 반환
        }
    }
}
