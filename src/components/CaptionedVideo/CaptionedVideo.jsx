import "./CaptionedVideo.css";
import ReactPlayer from "react-player";

export default function CaptionedVideo({ source, size, caption }) {
  const sizes = {
    small: "360px",
    medium: "720px",
    large: "1080px",
  };
  return (
    <div>
      <ReactPlayer
        url={source}
        className="temp"
        width="100%"
        height={sizes[size]}
        controls={true}
        loop={true}
      />
      <p>{caption}</p>
    </div>
  );
}
