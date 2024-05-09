import React, { useEffect } from "react";
import "../css/TestProgress.css";

const TestProgress = ({ currentStep, totalSteps }) => {
  const progressWidth = (currentStep / totalSteps) * 100 + "%";

  useEffect(() => {
    // 페이지 전환 시 progress bar 애니메이션 효과
    const progressBar = document.querySelector(".progress");
    progressBar.style.transition = "width 0.5s ease-in-out";
    progressBar.style.width = progressWidth;
  }, [currentStep, totalSteps]);

  return (
    <div className="progress-bar">
      <div className="progress">{`${currentStep}/${totalSteps}`}</div>
    </div>
  );
};

export default TestProgress;
