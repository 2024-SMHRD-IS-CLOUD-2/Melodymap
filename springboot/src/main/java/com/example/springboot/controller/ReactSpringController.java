package com.example.springboot.controller;
import com.example.springboot.entity.MelodyMap;
import com.example.springboot.service.DynamoDBFindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController // JSON, XML 등과 같은 데이터 반환 목적
// @RequestMapping("/react")
@RequestMapping("/api")
//@CrossOrigin(origins = "*") // React 앱의 URL에 맞게 조정
public class ReactSpringController {

    @Autowired
    private DynamoDBFindService dynamoDBFindService;

    @GetMapping("/choice")
    public ResponseEntity<?> getChoice(@RequestParam String choice) {
        Optional<?> result = dynamoDBFindService.find(MelodyMap.class, choice);
        if (result.isPresent()) {
            MelodyMap data = (MelodyMap) result.get();
            return ResponseEntity.ok(data);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    }





    // http://localhost:8081/react/login
//@GetMapping("/login")
//    public String login(@RequestParam String id, String pw){
//    System.out.println("접근완료");
//    System.out.println("ID : "+id);
//    System.out.println("PW : "+pw);
//
//    String result="";
//    if(id.equals("smhrd")&&pw.equals("456")){
//        result = "smhrdNick";
//
//    }else{
//        result="로그인실패";
//    }
//
//    return  result;
//}




