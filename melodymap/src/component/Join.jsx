import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/join.css";

const Join = () => {
  const navigate = useNavigate();
  return (
    <div className="container6">
      <div className="wrapper6">
        <div className="content6">
          <h1 className="member6">회원가입</h1>

          <div className="inputContainer6">
            <label htmlFor="idInput" className="labelText6">
              아이디
            </label>
            <input
              id="idInput"
              className="input16"
              type="text"
              placeholder="ID를 입력해주세요"
            />
          </div>

          <div className="inputContainer6">
            <label htmlFor="passwordInput" className="labelText6">
              비밀번호
            </label>
            <input
              id="passwordInput"
              className="input16"
              type="password"
              placeholder="PW를 입력해주세요"
            />
          </div>

          <div className="inputContainer6">
            <label htmlFor="nameInput" className="labelText6">
              이름
            </label>
            <input
              id="nameInput"
              className="input16"
              type="text"
              placeholder="이름을 입력해주세요"
            />
          </div>

          <div className="inputContainer6">
            <label htmlFor="birthInput" className="labelText6">
              생년월일
            </label>
            <input
              id="birthInput"
              className="input16"
              type="text"
              placeholder="생년월일 8글자 입력 (Ex-19960548)"
            />
          </div>

          <div
            className="inputContainer6"
            style={{ display: "flex", alignItems: "center" }}
          >
            <label
              htmlFor="genderInput"
              className="labelText6"
              style={{ marginRight: "10px" }}
            >
              성별 선택:
            </label>
            <div>
              <label htmlFor="male">
                <input type="radio" id="male" name="gender" value="male" />
                남성
              </label>
              <label htmlFor="female">
                <input type="radio" id="female" name="gender" value="female" />
                여성
              </label>
            </div>
          </div>

          <div>
            <button className="button16">회원가입</button>
            <button className="button26">취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
