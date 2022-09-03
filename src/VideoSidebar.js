import React from "react";
import "./VideoSidebar.css";
import useVideoPlayer from "./hooks/useVideoPlayer";
import { FiPenTool,FiList } from "react-icons/fi";
import { MdVolumeOff, MdLibraryBooks } from "react-icons/md";

function VideoSidebar({ quizOptions, videoRef }) {
  const { handleSkipToTime } = useVideoPlayer(videoRef);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <MdLibraryBooks className="icons" />
        <div><small><strong>7/10</strong></small></div>
      </div>
      
      <div className="videoSidebar__button">
        <FiPenTool className="icons" />
        <div><small><strong>Note</strong></small></div>
      </div>

      <div className="videoSidebar__button">
        <MdVolumeOff className="icons" />
        <div><small><strong>Unmute</strong></small></div>
      </div>

      {/* {quizOptions.quizOptions.map((quizOption, index) => (
        <div
          className={`videoSidebar__button ${
            quizOptions.isCorrectAnswer ? "yellow" : "purple"
          }`}
          onClick={() => handleSkipToTime(index, quizOptions.optionRedirects)}
        >
          {quizOption}
        </div>
      ))} */}
    </div>
  );
}

export default VideoSidebar;
