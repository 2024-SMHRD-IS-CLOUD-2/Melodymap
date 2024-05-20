import React, { useEffect, useRef } from "react";
import "../css/TestProgress.css";

const TestProgress = ({ currentStep, totalSteps }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    // 페이지 전환 시 progress bar 애니메이션 효과
    if (progressRef.current) {
      progressRef.current.style.width = (currentStep / totalSteps) * 100 + "%";
    }
  }, [currentStep, totalSteps]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        ref={progressRef}
      >{`${currentStep}/${totalSteps}`}</div>
    </div>
  );
};

export default TestProgress;
