import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function CaptionedImage({ source, alt, size, caption }) {
  let sizes = {
    small: "360px",
    medium: "540px",
    large: "720px",
  };
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Zoom>
        <img src={source} alt={alt} style={{ width: sizes[size] }} />
      </Zoom>
      {caption === "" ? null : (
        <p style={{ marginTop: "2px", fontStyle: "italic" }}>{caption}</p>
      )}
    </div>
  );
}
