import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";
import Abilities from "./Abilities";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Profile from "./Profile";

import "./styles.css";
import Welcome from "./Welcome";

function App() {
  const [active, setActive] = useState(0);
  const welcome = useRef(null);
  const profile = useRef(null);
  const experience = useRef(null);
  const education = useRef(null);
  const abilities = useRef(null);
  const interests = useRef(null);
  const contact = useRef(null);

  const executeScroll = (ref, index) => {
    setActive(index);
    ref.current.scrollIntoView();
  };

  const sections = [
    { to: "/welcome", ref: welcome, text: "Welcome" },
    { to: "/profile", ref: profile, text: "Profile" },
    { to: "/experience", ref: experience, text: "Experience" },
    { to: "/education", ref: education, text: "Education" },
    { to: "/abilities", ref: abilities, text: "Abilities" },
    { to: "/interests", ref: interests, text: "interests" },
    { to: "/contact", ref: contact, text: "Contact" },
  ];

  // function handleIntersect(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.intersectionRatio > prevRatio) {
  //       entry.target.style.backgroundColor = increasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //     } else {
  //       entry.target.style.backgroundColor = decreasingColor.replace(
  //         "ratio",
  //         entry.intersectionRatio
  //       );
  //     }

  //     prevRatio = entry.intersectionRatio;
  //   });
  // }

  // function createObserver() {
  //   let observer;

  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //   };

  //   sections.map((section) => {
  //     observer = new IntersectionObserver(handleIntersect, options);
  //     observer.observe(section.ref);
  //   });
  // }

  return (
    <div>
      <Router>
        <nav>
          <ul>
            {sections.map((section, index) => {
              const className = active === index ? "active" : "";
              return (
                <li key={index} className={className}>
                  <Link
                    to={section.to}
                    onClick={() => executeScroll(section.ref, index)}
                  >
                    {section.text}
                    <span className="dot"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Router>

      <div ref={welcome}>
        <Welcome />
      </div>
      <div ref={profile}>
        <Profile />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={abilities}>
        <Abilities />
      </div>
      <div ref={interests}>
        <Interests />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
