import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_Btn = ({ userID, userPW }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          UserID: userID,
          UserPW: userPW,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "login",
          },
        }
      );
      if (response.data) {
        // 로그인 성공 시 수행할 동작
        sessionStorage.setItem("userID", response.data.userID);
        console.log(response.data);
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
    <button className="button25" onClick={handleLogin}>
      로그인
    </button>
  );
};

export default Login_Btn;
