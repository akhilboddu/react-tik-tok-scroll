import React, { useRef } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import useVideoPlayer from "./hooks/useVideoPlayer";

import "./Video.css";

function Video({ url, channel, description, quizOptions, song }) {
  // const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
  } = useVideoPlayer(videoRef);

  const myArray = quizOptions.quizDisplayTimeStamp.split(":");
  const pauseVideo = Number(myArray[0]) * 60 + Number(myArray[1]);
console.log(playerState.progress)
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={togglePlay}
        ref={videoRef}
        src={url}
        controls={false}
        onTimeUpdate={handleOnTimeUpdate}
        // autoPlay={true}
        playsInline={true}
        poster="https://images.prismic.io/robsimpson/f4bce4e2-ab7d-44c5-96c6-bad7ec3f04f9_video-camera.jpg?auto=compress,format&fm=webp&lossless=false"
      ></video>
      <input
        type="range"
        style={{ backgroundSize: `${playerState.progress}%` }}
        min="0"
        max="100"
        step="any"
        value={playerState.progress}
        onChange={(e) => {
          console.log(e);
          handleVideoProgress(e);
        }}
        // disabled
      />
      {pauseVideo === parseInt(playerState.progress) ? (
        <>
          <VideoFooter
            channel={channel}
            description={description}
            song={song}
          />
          {/**/}
          <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
        </>
      ) : null}

      {!playerState.isPlaying ? (
        <VideoFooter channel={channel} description={description} />
      ) : null}
    </div>
  );
}

export default Video;
