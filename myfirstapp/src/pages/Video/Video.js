import React from "react";
import Videotopbar from "./components/videotopbar/Videotopbar";
import Videoother from "./components/videoothers/Videoother";
import Videosidebar from "./components/videosidebar/Videosidebar";
import "./Video.css";

function Video() {
  return (
    <div>
      <Videotopbar />
      <div className="videocontainer">
        <Videosidebar />
        <Videoother />
      </div>

    </div>
  );
}

export default Video;
