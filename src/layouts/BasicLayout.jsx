import { useEffect, useState } from "react";
import { Navbar, NavbarMobile } from "../components/Navigation/Navigation";

export function BasicLayout(content) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={windowWidth <= 768 ? "pageContainerMobile" : "pageContainer"}
    >
      {windowWidth <= 768 ? <NavbarMobile /> : <Navbar />}
      <div className="sideContainer">{content}</div>
    </div>
  );
}
