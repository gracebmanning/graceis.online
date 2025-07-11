import "./Badges.css";

function getColor(type) {
  console.log(type);
  if (type === "featured") {
    return "bgFeatured";
  } else if (type === "ongoing") {
    return "bgOngoing";
  } else {
    return "bgOther";
  }
}

export default function Badge({ size, type }) {
  // sizes: small 16px, medium 18px
  // types: featured, ongoing, or other
  return (
    <p
      className={`badge ${
        size === "small" ? "badgeSmall" : "badgeMedium"
      } ${getColor(type)}`}
    >
      {type}
    </p>
  );
}
