import "./CaptionedImage.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function CaptionedImage({ source, alt, size, caption }) {
  return (
    <div className="captionedImage">
      <Zoom>
        <img src={source} alt={alt} className={`${size}Img`} />
      </Zoom>
      {caption === "" ? null : (
        <p style={{ marginTop: "2px", fontStyle: "italic" }}>{caption}</p>
      )}
    </div>
  );
}
