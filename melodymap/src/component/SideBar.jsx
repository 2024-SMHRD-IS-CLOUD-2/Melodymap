// SideBar.js
import React from "react";
import "../css/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/join">Join</a>
      <a href="/mypage">My</a>
      <a href="/travelboard">Review</a>
    </div>
  );
};

export default SideBar;
