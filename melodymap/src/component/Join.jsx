import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/join.css";

const Join = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [userPW, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleJoin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/join",
        {
          userID, // 변경된 필드 이름
          userPW,
          name,
          birthday,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data === "Join successful") {
        // 회원가입 성공 시 수행할 동작
        navigate("/"); // 예시로 메인 페이지로 이동
      } else {
        // 회원가입 실패 시 수행할 동작
        alert("회원가입 실패: " + response.data);
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

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
              value={userID} // 변경된 필드 이름
              onChange={(e) => setUserID(e.target.value)} // 변경된 필드 이름
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
              value={userPW}
              onChange={(e) => setPassword(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={birthday}
              onChange={(e) => setBirth(e.target.value)}
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
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                남성
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                여성
              </label>
            </div>
          </div>

          <div>
            <button className="button16" onClick={handleJoin}>
              회원가입
            </button>
            <button className="button26" onClick={() => navigate(-1)}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
