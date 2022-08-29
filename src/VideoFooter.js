import React from "react";
import "./VideoFooter.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoContainer">
      <div className="videoFooter">
        <div className="videoFooter__text">
          <h3>Coding is for all</h3>
          <small>
            Coding is as important as reading and writing whether you have a
            computer or not.
          </small>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
