import React, { useEffect, useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
// import useVideoPlayer from "./hooks/useVideoPlayer";
import ReactPlayer from "react-player";

import "./Video.css";

function Video({ url, channel, description, quizOptions, song }) {
  const [playing, setPlaying] = useState(false);
  const [videoInfo, setVideoInfo] = useState(false);
  const videoRef = useRef(null);
  // const { playerState, togglePlay, handleOnTimeUpdate, handleVideoProgress } =
  //   useVideoPlayer(videoRef);

  useEffect(() => {
    // handleLoadClick();
  }, []);



  // const myArray = quizOptions.quizDisplayTimeStamp.split(":");
  // const pauseVideo = Number(myArray[0]) * 60 + Number(myArray[1]);
  // console.log(playerState.progress);
  return (
    <div className="video">
      <div className="video_click" onClick={() => setPlaying(!playing)}>
        <ReactPlayer
          ref={videoRef}
          className="video__player"
          url={url}
          playing={playing}
          width={"100%"}
          height={"100%"}
          playsinline={true}
          onDuration={(e) => console.log(e)}
          onProgress={(videoInfo) => {
            console.log(videoInfo);
            setVideoInfo(videoInfo);
          }}
        />
      </div>
      {/* <video
        className="video__player"
        loop
        onClick={handleClick}
        ref={videoRef}
        src={url}
        controls={false}
        onTimeUpdate={handleOnTimeUpdate}
        // autoPlay={true}
        // playsInline={true}
        // muted
        // poster="https://images.prismic.io/robsimpson/f4bce4e2-ab7d-44c5-96c6-bad7ec3f04f9_video-camera.jpg?auto=compress,format&fm=webp&lossless=false"
      /> */}
      <input
        className="videofooter"
        type="range"
        style={{ backgroundSize: `${videoInfo.played * 100}%` }}
        min="0"
        max="100"
        step="any"
        value={videoInfo.played * 100}
        onChange={(e) => {
          console.log(e);
          // handleVideoProgress(e);
        }}
        progressInterval={500}
      />
      {!playing ? (
        <>
          <VideoFooter channel={channel} description={description} />
          <VideoSidebar quizOptions={quizOptions} videoRef={videoRef} />
        </>
      ) : null}
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
