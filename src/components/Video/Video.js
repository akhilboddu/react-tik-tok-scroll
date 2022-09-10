import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
// import useVideoPlayer from "../../hooks/useVideoPlayer";
import ReactPlayer from "react-player";
import Note from "../Note/Note";
// import QuizOptions from "../QuizOptions/QuizOptions";
// import { QuizReelContext } from "../../contexts/QuizReelContext";

import "./Video.css";

function Video({
  url,
  description,
  quizOptions,
  displayQuizTimestampInt,
  hasQuiz,
  title,
  index,
  displayQuizTimestampString,
}) {
  const videoRef = useRef(null);
  const [playerState, setPlayerState] = useState({
    playing: false,
    volume: 0.01,
    muted: false,
    played: 0,
    loaded: 0,
    loadedSeconds: 0,
    playbackRate: 1.0,
    loop: true,
    isQuizDisplayed: false,
    videoElement: null,
    seeking: false,
    playedSeconds: 0,
  });
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [note, setNote] = useState({
    active: false,
    title: "title",
    description: "description",
    timestamp: "",
  });

  useEffect(() => {
    const elem = document.querySelector("#video0");
    elem.addEventListener("scroll", () => {
      console.log("scroll event fired!");
      // Y
      // const y = videoRef.current;
      console.log(elem.getBoundingClientRect());
    });
  }, [videoRef]);

  const handlePlayPause = () => {
    setPlayerState({ ...playerState, playing: !playerState.playing });
  };
  const handleSkipTo = (e) => {
    const manualNumberInDecimal = parseFloat(e.target.value) / 100;
    console.log("manualNumberInDecimal", manualNumberInDecimal);
    videoRef.current.seekTo(manualNumberInDecimal, "fraction");
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      played: manualNumberInDecimal,
    }));
  };

  const handleProgress = (state) => {
    // console.log("onProgress", state);
    if (hasQuiz) {
      if (
        parseInt(playerState.playedSeconds) ===
          parseInt(displayQuizTimestampInt) &&
        playing
      ) {
        setDisplayQuiz(true);
        handlePause();
      } else {
        setPlayerState((prevPlayerState) => ({ ...prevPlayerState, ...state }));
      }
    } else {
      setPlayerState((prevPlayerState) => ({ ...prevPlayerState, ...state }));
    }
  };

  const handlePlay = () => {
    // console.log("onPlay");
    setPlayerState({ ...playerState, playing: true });
  };

  const handlePause = () => {
    // console.log("onPause");
    setPlayerState({ ...playerState, playing: false });
  };

  const handleMuteUnmute = () => {
    setPlayerState({ ...playerState, muted: !playerState.muted });
  };

  const handleTakeNote = () => {
    console.log(
      "Taking note at: ",
      playerState.playedSeconds,
      title,
      description
    );
    handlePause();
    const timestamp = new Date(playerState.playedSeconds * 1000).toISOString().slice(14, 19);
    setNote({
      ...note,
      active: true,
      title,
      description,
      timestamp
    });
  };
  const handleCloseNote = () => {
    setNote({ ...note, active: false });
  };

  const handleQuizOptionSelect = (index, quizOptions) => {
    console.log(index, quizOptions.redirectTimestamps[index]);
    const myArray = quizOptions.redirectTimestamps[index].split(":");
    const manualChange = Number(myArray[0]) * 60 + Number(myArray[1]);
    const updatedTimeFraction = manualChange / playerState.loadedSeconds;
    console.log("updatedTimeFraction", updatedTimeFraction, manualChange);
    videoRef.current.seekTo(updatedTimeFraction, "fraction");
    setPlayerState((prevPlayerState) => ({
      ...prevPlayerState,
      played: updatedTimeFraction,
      playing: true,
    }));
    setDisplayQuiz(false);
    setIsOptionSelected(true);
  };

  const { playing, volume, muted, loop, played, playbackRate } = playerState;

  return (
    <div className="video">
      <div className="video_click" onClick={() => handlePlayPause()}>
        {note.active && <Note note={note} handleCloseNote={handleCloseNote} />}
        <ReactPlayer
          id={"video" + index}
          ref={videoRef}
          className="video__player"
          url={url}
          playing={playing && !note.active}
          width={"100%"}
          height={"100%"}
          playsinline={true}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          // onReady={() => console.log("onReady")}
          // onStart={() => console.log("onStart")}
          onPlay={handlePlay}
          onPause={handlePause}
          // onBuffer={() => setBuffer(true)}
          // onPlaybackRateChange={handleOnPlaybackRateChange}
          // onSeek={(e) => console.log("onSeek", e)}
          // onEnded={handleEnded}
          // onError={(e) => console.log("onError", e)}
          onProgress={(e) => handleProgress(e, displayQuizTimestampInt)}
          // onDuration={handleDuration}
        />
      </div>
      <input
        className="videofooter"
        type="range"
        style={{ backgroundSize: `${played * 100}%` }}
        min="0"
        max="100"
        step="any"
        value={played * 100}
        onChange={(e) => {
          handleSkipTo(e);
        }}
      />
      {!playing ? (
        <>
          <VideoFooter
            title={title}
            description={description}
            displayQuiz={displayQuiz}
            quizOptions={hasQuiz ? quizOptions : []}
            handleQuizOptionSelect={hasQuiz ? handleQuizOptionSelect : null}
            isOptionSelected={isOptionSelected}
            hasQuiz={hasQuiz ?? false}
          />
        </>
      ) : null}

      <VideoSidebar
        muted={muted}
        handleMuteUnmute={handleMuteUnmute}
        playing={playing}
        handleTakeNote={handleTakeNote}
      />
    </div>
  );
}

export default Video;

// {pauseVideo === parseInt(playerState.progress) ? (
//   <>
//     <VideoFooter
//       channel={channel}
//       description={description}
//       song={song}
//     />
//     {/**/}
//     <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
//   </>
// ) : null}

// {!playerState.isPlaying ? (
//   <>
//     <VideoFooter channel={channel} description={description} />
//     <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
//   </>
// ) : null}
