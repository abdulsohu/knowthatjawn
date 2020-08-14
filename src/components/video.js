import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <iframe
      style={{ marginTop: "1rem", borderRadius: "16px" }}
      width="512"
      height="280"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
