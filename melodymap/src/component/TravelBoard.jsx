import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/travelboard.css";
import SideBar from "./SideBar";

const TravelBoard = () => {
  const navigate = useNavigate();
  const [travelEntries, setTravelEntries] = useState([]);

  useEffect(() => {
    const fetchTravelEntries = async () => {
      try {
        const response = await axios.post(
          "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              "spring.cloud.function.definition": "scanComment",
            },
          }
        );
        console.log(response.data);
        if (response.data) {
          const entries = response.data.map((item, index) => ({
            id: index,
            title: item.commentTitle,
            author: item.author,
            date: item.date,
            content: item.content, // content도 포함하도록 수정
          }));
          setTravelEntries(entries);
        }
      } catch (error) {
        console.error("Failed to fetch travel entries:", error);
      }
    };

    fetchTravelEntries();
  }, []);

  const getShortTitle = (title) => {
    return title && title.length > 8 ? title.slice(0, 8) + "..." : title;
  };

  const handleRowClick = (entry) => {
    navigate(`/reviewdetail/${entry.id}`, { state: entry });
  };

  return (
    <div className="container9">
      <div className="wrapper9">
        <SideBar />
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
                {travelEntries.map((entry, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(entry)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{index + 1}</td>
                    <td>{getShortTitle(entry.title)}</td>
                    <td>{entry.author}</td>
                    <td>{entry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => {
                navigate("/travelwrite");
              }}
              className="write9"
            >
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBoard;
