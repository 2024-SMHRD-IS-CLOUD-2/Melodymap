package com.example.springboot;

import com.example.springboot.controller.LambdaApiGatewayFunction;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Map;
import java.util.function.Function;

@SpringBootApplication
public class SpringbootApplication {

//	@Bean
//	public Function<Map<String,Object>, List<String>> lambdaApiGatewayFunctionBean(){
//		return new LambdaApiGatewayFunction();
//	}
	public static void main(String[] args){
		SpringApplication.run(SpringbootApplication.class, args);
	}

}



