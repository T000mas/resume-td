import React from "react";

export default function Stars({ name, number }) {
  let level = <div></div>;
  if (number === 1) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
    );
  } else if (number === 2) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
    );
  } else if (number === 3) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
    );
  } else if (number === 4) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
    );
  } else if (number === 5) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
      </div>
    );
  } else if (number === 6) {
    level = (
      <div>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
    );
  } else {
    level = (
      <div>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
        <span>&#9734;</span>
      </div>
    );
  }

  return (
    <li>
      <div className="skillname">{name}</div>
      <div className="skilllevel">{level}</div>
    </li>
  );
}
