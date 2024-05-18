import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import SideBar from "./SideBar";

const Login = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  const loginForm = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/login",
        {
          userID,
          userPW,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "Login successful") {
        // 로그인 성공 시 수행할 동작
        navigate("/"); // 예시로 메인 페이지로 이동
      } else {
        // 로그인 실패 시 수행할 동작
        alert("로그인 실패: " + response.data);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="container5">
      <div className="wrapper5">
        <div className="content5">
          <SideBar />
          <h1 className="login5">LOGIN</h1>
          <input
            className="input15"
            type="text"
            placeholder="ID를 입력해주세요"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <br />
          <input
            className="input25"
            type="password"
            placeholder="PW를 입력해주세요"
            value={userPW}
            onChange={(e) => setUserPW(e.target.value)}
          />

          <div className="socialLogin5">
            <a
              href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="naver5"
                src={`${process.env.PUBLIC_URL}/image/naver2.png`}
                alt="네이버 간편인증"
              />
            </a>
            <a
              href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Flogins.daum.net%2Faccounts%2Fksso.do%3Frescue%3Dtrue%26url%3Dhttps%253A%252F%252Fwww.daum.net#login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="kakao5"
                src={`${process.env.PUBLIC_URL}/image/kakao2.png`}
                alt="카카오 간편인증"
              />
            </a>
          </div>
          <div>
            <button className="button15" onClick={() => navigate("/Join")}>
              회원가입
            </button>
            <button className="button25" onClick={loginForm}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
