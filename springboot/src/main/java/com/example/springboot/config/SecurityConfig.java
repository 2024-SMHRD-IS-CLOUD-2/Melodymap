package com.example.springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
public class SecurityConfig {
    // 비밀번호 암호화 빈
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return  new BCryptPasswordEncoder();
    }
    // 인증여부에 따라 요청을 허용, 차단 설정
    // 권한정보에 따라 요청을 허용, 차단 설정
    // http://localhost:8081/????
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws  Exception{
        http
        // 요청
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/**").permitAll() // 인증없이 접근 허용
                        .requestMatchers("/admin/**").hasRole("ADMIN")
                        // .anyRequest().authenticated()
                )
        // 로그인
                .formLogin(form->form
                        .loginPage("/login") // /login -> 스프링 시큐리티에서 제공하는 로그인 화면
                );
        // 로그아웃


        return http.build();
    }
}
