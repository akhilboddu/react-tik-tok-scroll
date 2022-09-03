import React from "react";
import "./Header.css";
import { Line, Circle } from "rc-progress";
import XP from "../XP/XP";

function Header() {
  return (
    <header>
      <div className="header-items">
        <div className="course-progress">
          <Line
            strokeWidth={10}
            trailWidth={10}
            percent={50}
            strokeColor="#8556f8"
          />
        </div>
        <div className="stats">
          <div className="circle">
            <Circle
              strokeWidth={4}
              trailWidth={4}
              percent={50}
              strokeColor="#8556f8"
            />
            <div className="score">55XP</div>
          </div>
          <div className="circle">
            <Circle
              strokeWidth={4}
              trailWidth={4}
              percent={50}
              strokeColor="#8556f8"
            />
            <div className="score">1🔥</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
