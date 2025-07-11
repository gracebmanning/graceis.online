import { useEffect, useState } from "react";
import { Navbar, NavbarMobile } from "../components/Navigation/Navigation";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export function BasicLayout({ title, content, bg = true }) {
  // GOOGLE ANALYTICS
  ReactGA.initialize("G-40KJD20ZZC");
  let location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: { title },
    });
  }, [location, title]);

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
      <div className={bg ? "sideContainer" : "sideContainerNoBg"}>
        {content}
      </div>
    </div>
  );
}
