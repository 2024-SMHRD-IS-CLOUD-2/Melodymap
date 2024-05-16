import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MBTIBarChart = ({ mbtiData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: mbtiData.map((item) => item.type),
          datasets: [
            {
              label: "MBTI 유형 통계",
              data: mbtiData.map((item) => item.count),
              backgroundColor: "rgba(212, 241, 253)", // 막대 차트 색상
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  family: "WavvePADO-Regular", // y축 라벨 폰트 설정
                },
              },
            },
            x: {
              ticks: {
                font: {
                  family: "WavvePADO-Regular", // x축 라벨 폰트 설정
                },
              },
            },
          },
          plugins: {
            tooltip: {
              titleFont: {
                family: "WavvePADO-Regular",
              },
              bodyFont: {
                family: "WavvePADO-Regular",
              },
            },
            legend: {
              labels: {
                font: {
                  family: "WavvePADO-Regular",
                },
              },
            },
          },
        },
      });
    }
  }, [mbtiData]);

  return (
    <div>
      <canvas ref={chartRef} width="330" height="300" />
    </div>
  );
};

export default MBTIBarChart;
