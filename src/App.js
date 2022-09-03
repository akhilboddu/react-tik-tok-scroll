import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";
import Footer from "./Footer";
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
          }) => (
            <>
              <Video
                url={"https://zaiocontent.s3.eu-west-2.amazonaws.com/test1.mp4"}
                channel={channel}
                song={song}
                likes={likes}
                messages={messages}
                description={description}
                shares={shares}
                quizOptions={quizOptions}
              />
            </>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
