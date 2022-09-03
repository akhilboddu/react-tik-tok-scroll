import React, { useState } from "react";
import "./VideoFooter.css";
import TextTruncate from "react-text-truncate"; // recommend

function VideoFooter({ channel, description, song }) {
  const [max, setMax] = useState(false);

  const t = `orem-Labore cupidatat ut magna ad. Incididunt ad pariatur mollit
  laboris eiusmod consectetur culpa duis minim. In ut et laboris sit
  amet laborum officia incididunt cillum laborum irure eu. Reprehenderit
  culpa do magna qui mollit sit qui velit`;
  return (
    <div className={`videoContainer ${max ? "maxVideoContainer" : ""}`}>
      <div className="videoFooter">
        <div class="post-pic">
          <img src="https://res.cloudinary.com/ak-124210/image/upload/v1642434078/yjnzwmihmhghxkwnb6n9.png" />
          <span class="profile-name">What is html?</span>
          <button className="signup-cta">Signup</button>
        </div>
        <div class="video-caption">
          {!max ? (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={t}
              textTruncateChild={
                <a style={{ cursor: "pointer"}} onClick={() => setMax(true)}>
                  <strong>view more</strong>
                </a>
              }
            />
          ) : (
            <span style={{ cursor: "pointer"}} onClick={() => setMax(false)}>
              {t} <br/><strong style={{ marginTop: "1rem" }}>view less</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
