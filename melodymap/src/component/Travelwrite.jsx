import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/travelwrite.css";

const Travelwrite = ({ addTravelEntry }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(""); // 작성자 추가
  const [reviewContent, setReviewContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleSave = () => {
    const newEntry = {
      id: Date.now(),
      title: title,
      author: author,
      date: new Date().toLocaleDateString(),
    };
    addTravelEntry(newEntry);
    navigate("/travelboard");
  };

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
              <p className="resultp">작성자</p>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)} // 작성자 입력 필드 수정
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
            <button onClick={handleSave} className="saveT">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelwrite;
