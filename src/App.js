import React, { useState, useEffect } from "react";
import Video from "./components/Video/Video";
import db from "./firebase";
import "./App.css";
import Footer from "./components/BottomNav/Footer";
import Header from "./components/Header/Header";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM

    <div className="app">
      <Header />
      <div className="app__videos">
        {videos.map(
          ({
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
            quizOptions,
          }) => {
            const myArray = quizOptions.quizDisplayTimeStamp.split(":");
            const displayQuizTimestampInt =
              Number(myArray[0]) * 60 + Number(myArray[1]);
            return (
              <>
                <Video
                  url={
                    "https://zaiocontent.s3.eu-west-2.amazonaws.com/test1.mp4"
                  }
                  channel={channel}
                  song={song}
                  likes={likes}
                  messages={messages}
                  description={description}
                  shares={shares}
                  quizOptions={quizOptions}
                  displayQuizTimestampInt={displayQuizTimestampInt}
                />
              </>
            );
          }
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
