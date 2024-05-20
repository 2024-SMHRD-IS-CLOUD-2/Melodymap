import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/travelboard.css";
import SideBar from "./SideBar";

const TravelBoard = ({ travelEntries }) => {
  const navigate = useNavigate();

  const getShortTitle = (title) => {
    return title.length > 8 ? title.slice(0, 8) + "..." : title;
  };

  const handleRowClick = (entryId) => {
    navigate(`/reviewdetail/${entryId}`);
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
                    key={entry.id}
                    onClick={() => handleRowClick(entry.id)}
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
