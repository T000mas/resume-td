import React, { useEffect, useState } from "react";
import imagePlaceholder from "./welcomeBackgroundPlaceholder.png";
import fullImage from "./welcomeBackground.png";

export default function Welcome() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [image, setImage] = useState(`url(${imagePlaceholder})`);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="container welcome"
      style={{
        height: windowHeight,
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transition: "0.5s",
      }}
    >
      <img
        src={fullImage}
        style={{ display: "none" }}
        alt="mlem"
        onLoad={() => setImage(`url(${fullImage})`)}
      />
      <div className="welcomeText">
        <div className="title">Tomasz Dominiczak</div>
        <div className="headline">Web CV</div>
      </div>
    </div>
  );
}
