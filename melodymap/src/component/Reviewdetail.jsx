import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/reviewdetail.css";
import SideBar from "./SideBar";

const ReviewDetail = () => {
  const location = useLocation();
  const entry = location.state;
  const navigate = useNavigate();

  if (!entry) {
    return <div>해당 후기를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="containerRD">
      <div className="wrapperRD">
        <SideBar />
        <div className="contentRD">
          <div className="headerRD">
            <p className="titleRD">{entry.title}</p>
            <p className="nameRD">작성자: {entry.author}</p>
          </div>
          <div className="lineRD"></div>
          <div>
            {entry.imageUrls &&
              entry.imageUrls.length > 0 &&
              entry.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={decodeURIComponent(url)}
                  alt={`Review ${index}`}
                  style={{ height: "200px", width: "200px", margin: "10px" }}
                />
              ))}
          </div>
          <div className="reviewRD">
            <p>{entry.content || "상세 내용이 없습니다."}</p>
            <button onClick={() => navigate("/travelboard")}>목록보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
