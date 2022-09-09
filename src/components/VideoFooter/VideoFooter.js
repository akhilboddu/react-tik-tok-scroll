import React, { useState } from "react";
import "./VideoFooter.css";
import TextTruncate from "react-text-truncate"; // recommend
import QuizOptions from "../QuizOptions/QuizOptions";
// import useVideoPlayer from "../../hooks/useVideoPlayer";

function VideoFooter({
  channel,
  description,
  song,
  displayQuiz,
  handleQuizOptionSelect,
  quizOptions,
  isOptionSelected
}) {
  const [max, setMax] = useState(false);

  const t = `orem-Labore cupidatat ut magna ad. Incididunt ad pariatur mollit
  laboris eiusmod consectetur culpa duis minim. In ut et laboris sit
  amet laborum officia incididunt cillum laborum irure eu. Reprehenderit
  culpa do magna qui mollit sit qui velit`;

  return (
    <div className={`videoContainer ${max ? "maxVideoContainer" : ""}`}>
      <div className="videoFooter">
        <div className="quizOptions">
          {displayQuiz ? <QuizOptions quizOptions={quizOptions} handleQuizOptionSelect={handleQuizOptionSelect} /> : null}
          {/* {isOptionSelected ? <QuizOptions quizOptions={quizOptions} handleQuizOptionSelect={handleQuizOptionSelect} />} */}
        </div>
        <div class="post-pic">
          <img
            alt="pic of course"
            src="https://res.cloudinary.com/ak-124210/image/upload/v1642434078/yjnzwmihmhghxkwnb6n9.png"
          />
          <span class="profile-name">
            {displayQuiz ? "Quiz Time" : "What is html?"}
          </span>
          {!displayQuiz ? <button className="signup-cta">Signup</button> : null}
        </div>
        <div class="video-caption">
          {!max ? (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={displayQuiz ? "USE CUSTOM QUIZ DESCRIPTION" : t}
              textTruncateChild={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setMax(true)}
                >
                  <strong>view more</strong>
                </span>
              }
            />
          ) : (
            <span style={{ cursor: "pointer" }} onClick={() => setMax(false)}>
              {displayQuiz ? "USE CUSTOM QUIZ DESCRIPTION" : t} <br />
              <strong style={{ marginTop: "1rem" }}>view less</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
