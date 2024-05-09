package com.example.springboot.controller;
import com.example.springboot.entity.MelodyMap;
import com.example.springboot.entity.Users;
import com.example.springboot.service.DynamoDBFindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody Users newEntiry){
        Users saveUser = dynamoDBFindService.save(newEntiry);
        if(saveUser != null){
            return ResponseEntity.ok("join successful");
        }
        else {
            return ResponseEntity.internalServerError().body("join failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users userEntity) {
        Optional<Users> userOptional = dynamoDBFindService.find(Users.class, userEntity.getUserID());
        if (userOptional.isPresent() && userOptional.get().getUserPW().equals(userEntity.getUserPW())) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }

    @DeleteMapping("/delete/{UserID}")
    public ResponseEntity<String> deleteUser(@PathVariable String UserID){
        dynamoDBFindService.deleteByKey(Users.class, UserID);
        return ResponseEntity.ok("deleted successful");
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




