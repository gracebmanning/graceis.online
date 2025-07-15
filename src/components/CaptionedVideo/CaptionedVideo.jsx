import ReactPlayer from "react-player";

export default function CaptionedVideo({ source, size, caption }) {
  const sizes = {
    small: "360px",
    medium: "540px",
    large: "720px",
  };

  const youtubeSizes = {
    small: ["360px", "202.5px"],
    medium: ["540px", "303.75px"],
    large: ["720px", "405px"],
  };

  let videoPlayer = null;

  if (source.includes("youtube") || source.includes("youtu.be")) {
    return (videoPlayer = (
      <ReactPlayer
        url={source}
        className="temp"
        width={youtubeSizes[size][0]}
        height={youtubeSizes[size][1]}
        controls={true}
        loop={true}
      />
    ));
  } else {
    videoPlayer = (
      <ReactPlayer
        url={source}
        className="temp"
        width={sizes[size]}
        height="auto"
        controls={true}
        loop={true}
      />
    );
  }

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {videoPlayer}
      <p style={{ marginTop: "10px", fontStyle: "italic" }}>{caption}</p>
    </div>
  );
}
