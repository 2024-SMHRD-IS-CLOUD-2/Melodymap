import React from "react";
import "../css/sidebar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const checkLogin = () => {
    if (sessionStorage.getItem("userID")) {
      navigate("/travelboard");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div className="sidebar">
      {sessionStorage.getItem("userID") ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate("/mypage")}>My</button>
          <button onClick={checkLogin}>Review</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/join")}>Join</button>
          <button onClick={() => navigate("/mypage")}>My</button>
          <button onClick={checkLogin}>Review</button>
        </>
      )}
    </div>
  );
};

export default SideBar;
