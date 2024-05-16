package com.example.springboot.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Map;
import java.util.function.Function;

@SpringBootApplication
public class MelodyMapApplication{


    @Bean
    public Function<Map<String,Object>, List<String>> lambdaApiGatewayFunctionBean(){
        return new LambdaApiGatewayFunction();
    }
    public static void main(String[] args){
        SpringApplication.run(MelodyMapApplication.class, args);
    }

}
