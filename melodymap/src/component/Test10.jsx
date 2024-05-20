import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import TestProgress from "./TestProgress";
import axios from "axios";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  const { choice, addSelection } = useTest();
  const currentStep = 10; // 현재 페이지 번호
  const totalSteps = 10; // 총 페이지 수

  /*   const sendDataToServer = async (selections) => {
    axios
      .get(`http://localhost:8081/api/choice?choice=${selections}`)
      .then((res) => {
        console.log("서버로부터의 응답:", res.data);
        console.log(res.data.music, res.data.places);
        navigate("/Result", {
          state: {
            music: res.data.music,
            place: res.data.places,
          },
          // navigate 함수를 사용해 Result 페이지로 이동하면서 음악 및 장소 상세 정보를 state로 전달
        });
      })
      .catch((error) => {
        console.error("데이터 요청 중 오류 발생:", error);
      });
  }; */
  const sendDataToServer = async (choice) => {
    try {
      const response = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          choice: choice,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "getChoice",
          },
        }
      );

      console.log("서버로부터의 응답:", response.data);
      console.log(response.data.music, response.data.places);

      navigate("/Result", {
        state: {
          music: response.data.music,
          place: response.data.places,
        },
      });
    } catch (error) {
      console.error("데이터 요청 중 오류 발생:", error);
    }
  };
  useEffect(() => {
    // 마지막 페이지에서만 서버로 데이터 전송
    if (choice.length === 10) {
      console.log(choice);
      sendDataToServer(choice);
    }
  }, [choice, navigate]);

  return (
    <div className="container">
      <div className="wrapper">
        <TestProgress currentStep={currentStep} totalSteps={totalSteps} />
        <div>
          <h1 className="question">Q 10.</h1>
          <h1 className="content">
            여행을 가기위해 숙소를
            <br></br>
            예약해야 한다.
            <br />
            당신의 선택은?
          </h1>
          <button
            onClick={() => {
              addSelection("M");
            }}
            className="que1"
          >
            잠만 자면 됐지.. 가성비로 가자
          </button>
          <button
            onClick={() => {
              addSelection("H");
            }}
            className="que2"
          >
            이것도 여행의 일부지 이왕이면 최고로 가자!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
