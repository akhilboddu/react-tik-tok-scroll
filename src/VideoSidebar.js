import React from "react";
import "./VideoSidebar.css";
import useVideoPlayer from "./hooks/useVideoPlayer";

function VideoSidebar({ quizOptions, videoRef }) {
  const {
    handleSkipToTime
  } = useVideoPlayer(videoRef);
  return (
    <div className="videoSidebar">
      {quizOptions.quizOptions.map((quizOption, index) => (
        <div
          className={`videoSidebar__button ${
            quizOptions.isCorrectAnswer ? "yellow" : "purple"
          }`}
          onClick={() => handleSkipToTime(index, quizOptions.optionRedirects)}
        >
          {quizOption}
        </div>
      ))}
    </div>
  );
}

export default VideoSidebar;
