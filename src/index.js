import React, { useEffect, useRef, useState } from "react";
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
  const observer = useRef(null);

  const executeScroll = (ref, index) => {
    ref.current.scrollIntoView();
  };

  const sections = useRef([
    { to: "/welcome", ref: welcome, text: "Welcome", component: <Welcome /> },
    { to: "/profile", ref: profile, text: "Profile", component: <Profile /> },
    {
      to: "/experience",
      ref: experience,
      text: "Experience",
      component: <Experience />,
    },
    {
      to: "/education",
      ref: education,
      text: "Education",
      component: <Education />,
    },
    {
      to: "/abilities",
      ref: abilities,
      text: "Abilities",
      component: <Abilities />,
    },
    {
      to: "/interests",
      ref: interests,
      text: "interests",
      component: <Interests />,
    },
    { to: "/contact", ref: contact, text: "Contact", component: <Contact /> },
  ]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-35% 0px -50%",
      threshold: 0.05,
    };

    function handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(parseInt(entry.target.id));
        }
      });
    }

    function createObserver() {
      observer.current = new IntersectionObserver(handleIntersect, options);
      sections.current.map((section) => {
        return observer.current.observe(section.ref.current);
      });
    }

    createObserver();

    return () => observer.current.disconnect();
  }, []);

  return (
    <div className="index">
      <Router>
        <nav>
          <ul>
            {sections.current.map((section, index) => {
              const className = active === index ? "active" : "";
              return (
                <li id={active} key={index} className={className}>
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

      {sections.current.map((section, index) => {
        return (
          <div key={index} id={index} ref={section.ref}>
            {section.component}
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
