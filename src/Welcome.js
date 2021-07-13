import React, { useState } from "react";

export default function Welcome() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  function handleResize() {
    setWindowHeight(window.innerHeight);
  }

  window.addEventListener("resize", handleResize);
  return (
    <div className="container welcome" style={{ height: windowHeight }}>
      <div className="welcomeText">
        <div className="title">Tomasz Dominiczak</div>
        <div className="headline">Web CV</div>
      </div>
    </div>
  );
}
