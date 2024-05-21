// SideBar.js
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
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
          <a href="/mypage">My</a>
          <a href="/travelboard" onClick={checkLogin}>
            Review
          </a>
        </>
      ) : (
        <>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/join">Join</a>
          <a href="/mypage">My</a>
          <a href="/travelboard" onClick={checkLogin}>
            Review
          </a>
        </>
      )}
    </div>
  );
};

export default SideBar;
