import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container5">
      <div className="wrapper5">
        <div className="content5">
          <h1 className="login5">LOGIN</h1>
          <input
            className="input15"
            type="text"
            placeholder="ID를 입력해주세요"
          />
          <br />
          <input
            className="input25"
            type="text"
            placeholder="PW를 입력해주세요"
          />

          <div className="socialLogin5">
            <a
              href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"
              target="_blank"
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
            >
              <img
                className="kakao5"
                src={`${process.env.PUBLIC_URL}/image/kakao2.png`}
                alt="카카오 간편인증"
              />
            </a>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/Join");
              }}
              className="button15"
            >
              회원가입
            </button>
            <button className="button25">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
