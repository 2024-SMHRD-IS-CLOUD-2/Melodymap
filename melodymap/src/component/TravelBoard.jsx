import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/travelboard.css";

const TravelBoard = () => {
  const navigate = useNavigate();
  const [travelEntries, setTravelEntries] = useState([]);

  const handleAddEntry = () => {
    const newEntry = {
      id: travelEntries.length + 1,
      title: "여행 후기",
      author: "작성자",
      date: new Date().toLocaleDateString(),
    };
    setTravelEntries([...travelEntries, newEntry]);
  };
  return (
    <div className="container9">
      <div className="wrapper9">
        <div className="content9">
          <div>
            <p className="board9">여행 후기 게시판</p>
          </div>
          <div>
            <table className="table9">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>여행후기</th>
                  <th>작성자</th>
                  <th>작성일시</th>
                </tr>
              </thead>
              <tbody>
                {travelEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.id}</td>
                    <td>{entry.title}</td>
                    <td>{entry.author}</td>
                    <td>{entry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddEntry} className="write9">
              글쓰기
            </button>
            <button
              onClick={() => {
                navigate("/travelwrite");
              }}
            >
              넘어가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBoard;
