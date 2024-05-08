package com.example.springboot.controller;

import com.example.springboot.entity.MelodyMap;
import com.example.springboot.service.DynamoDBFindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MelodyMapController {

    @Autowired
    private DynamoDBFindService dynamoDBFindService;

    @GetMapping("/submit")
    public ResponseEntity<Map<String,String>> recommandResult(@RequestParam String choice) {
        Optional<MelodyMap> result = dynamoDBFindService.find(MelodyMap.class, choice);
        if (result.isPresent()) {
            Map<String,String> response = new HashMap<>();
            response.put("place", result.get().getRecommandPlace());
            response.put("music",String.join(", ",result.get().getRecommandMusic()));
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
