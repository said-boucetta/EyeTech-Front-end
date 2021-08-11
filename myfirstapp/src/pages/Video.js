import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("http://localhost:5000/api/video");
      console.log(response.data);
      setVideos(response.data);
    };
    getVideos();
  }, []);
  return (
    <div>
      {videos.map((video) => {
        return <ReactPlayer url={video.url} />;
      })}
    </div>
  );
};

export default Video;
