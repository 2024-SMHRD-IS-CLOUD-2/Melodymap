import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Resultshare = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const choice = searchParams.get("choice");

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendDataToServer = async (choice) => {
    setIsLoading(true); // 서버 요청 전 로딩 상태 활성화
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
      setData(response.data); // 받은 데이터를 state에 저장
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false); // 서버 요청 완료 후 로딩 상태 비활성화
    }
  };

  useEffect(() => {
    if (choice) {
      sendDataToServer(choice);
    }
  }, [choice]);

  return (
    <div>
      <h1>Result Share Page</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Choice: {choice}</p>
          <p>Data: {JSON.stringify(data)}</p>
          {/* Render other components or data based on the received data */}
        </div>
      )}
    </div>
  );
};

export default Resultshare;
