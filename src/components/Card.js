import React from "react";
import "../css/card.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Card({ os, count, total }) {
  const progressBarStyle = {
    path: {
      stroke: "rgb(75, 75, 180)",
      strokeLinecap: "butt",
    },
    trail: {
      stroke: "rgb(150, 150, 150)",
    },
  };

  return (
    <div className="card-container">
      <div className="progress-bar-container">
        <CircularProgressbar
          value={(count / total) * 100}
          styles={progressBarStyle}
          strokeWidth={12}
        />
      </div>
      <div className="content-container">
        <span className="os">{os}</span>
        <span className="count">Redirects: {count}</span>
      </div>
    </div>
  );
}
