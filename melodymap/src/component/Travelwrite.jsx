import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/travelwrite.css";

const Travelwrite = () => {
  const [title, setTitle] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="containerT">
      <div className="wrapperT">
        <div className="contentT">
          <div style={{ width: "330px" }} className="marginT">
            <p className="boardT" style={{ width: "330px" }}>
              여행 후기 작성
            </p>
          </div>
          <div>
            <div className="titleT">
              <p className="titlep">제목</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="resultT">
              <p className="resultp">추천 결과</p>
              <input
                type="text"
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
              />
            </div>
            <div className="imageT">
              <p className="imagep">이미지</p>
              <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>
            <div className="contentT">
              <p>후기 내용</p>
              <textarea
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                style={{ width: "330px", height: "330px" }}
              />
            </div>
            <button
              onClick={() => {
                navigate("/reviewdetail");
              }}
              className="saveT"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelwrite;
