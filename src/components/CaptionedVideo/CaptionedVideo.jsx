import "./CaptionedVideo.css";
import ReactPlayer from "react-player";

export default function CaptionedVideo({ source, size, caption }) {
  const sizes = {
    small: "360px",
    medium: "540px",
    large: "720px",
    mobile: "100%",
  };

  const youtubeSizes = {
    small: ["360px", "202.5px"],
    medium: ["540px", "303.75px"],
    large: ["720px", "405px"],
    mobile: ["100%", "100%"],
  };

  let videoPlayer = null;

  if (source.includes("youtube") || source.includes("youtu.be")) {
    return (videoPlayer = (
      <ReactPlayer
        url={source}
        className={`${size}Video`}
        width={
          window.innerWidth <= 768 ? sizes["mobile"][0] : youtubeSizes[size][0]
        }
        height={
          window.innerWidth <= 768 ? sizes["mobile"][1] : youtubeSizes[size][1]
        }
        controls={true}
        loop={true}
      />
    ));
  } else {
    videoPlayer = (
      <ReactPlayer
        url={source}
        className={`${size}Video`}
        width={window.innerWidth <= 768 ? sizes["mobile"] : sizes[size]}
        height="auto"
        controls={true}
        loop={true}
      />
    );
  }

  return (
    <div className="captionedVideo">
      {videoPlayer}
      <p className="caption">{caption}</p>
    </div>
  );
}
