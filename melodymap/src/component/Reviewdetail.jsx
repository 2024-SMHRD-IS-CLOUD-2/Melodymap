import React from "react";
import { useLocation } from "react-router-dom";
import "../css/reviewdetail.css";
import SideBar from "./SideBar";

const ReviewDetail = () => {
  const location = useLocation();
  const entry = location.state;

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
            <img
              src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
              alt="Main Image"
              className="imageRD"
            />
          </div>
          <div className="reviewRD">
            <p>{entry.content || "상세 내용이 없습니다."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
