import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/result.css";

const ResultSave = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { music, place } = location.state || {};
  const userID = sessionStorage.getItem("userID");
  console.log(userID);

  // music과 place 배열을 합쳐서 새로운 배열 생성
  const combinedData = [...music, ...place];

  // combinedData를 두 개의 배열로 나눔
  const musicdata = combinedData.slice(0, 5);
  const placedata = combinedData.slice(5, 10);
  const userResult = [musicdata, placedata];

  const saveButtonStyle = {
    backgroundColor: "rgb(212, 241, 253)",
    width: "220px",
    height: "50px",
    fontSize: "24px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "40px",
  };

  //   console.log("UserID:", userID);
  //   console.log("userResult:", JSON.stringify(userResult, null, 2));

  const saveResult = async () => {
    try {
      const res = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          UserID: userID,
          userResult: userResult,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "updateUserData",
          },
        }
      );
      if (res.data) {
        navigate("/mypage");
      } else {
        console.log("결과 저장 실패");
      }
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
    }
  };

  return userID ? (
    <button onClick={saveResult} style={saveButtonStyle}>
      결과 저장하기
    </button>
  ) : (
    <button
      className="save-button"
      onClick={() => {
        alert("로그인이 필요합니다");
        navigate("/login");
      }}
      style={saveButtonStyle}
    >
      결과 저장하기
    </button>
  );
};

export default ResultSave;
