import axios from "axios";
import { useNavigate } from "react-router-dom";

const Join_Btn = ({ userID, userPW, name, birthday, gender }) => {
  const navigate = useNavigate();

  const handleJoin = async () => {
    try {
      const response = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          UserID: userID, // 변경된 필드 이름
          UserPW: userPW,
          Name: name,
          Birthday: birthday,
          Gender: gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "join",
          },
        }
      );
      if (response.data === "User joined successfully") {
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
    <button className="button16" onClick={handleJoin}>
      회원가입
    </button>
  );
};
export default Join_Btn;
