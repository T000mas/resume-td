import React from "react";

export default function Stars({ name, number }) {
  let level = <div></div>;
  if (number === 1) {
    level = (
      <div>
        <span>&#9899;</span>
        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>
      </div>
    );
  } else if (number === 2) {
    level = (
      <div>
        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9898;</span>
        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>
      </div>
    );
  } else if (number === 3) {
    level = (
      <div>
        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>
      </div>
    );
  } else if (number === 4) {
    level = (
      <div>
        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>
      </div>
    );
  } else if (number === 5) {
    level = (
      <div>
        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9898;</span>
      </div>
    );
  } else if (number === 6) {
    level = (
      <div>
        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>

        <span>&#9899;</span>
      </div>
    );
  } else {
    level = (
      <div>
        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>

        <span>&#9898;</span>
      </div>
    );
  }

  return (
    <li className="skill">
      <div className="skillname">{name}</div>
      <div className="skilllevel">{level}</div>
    </li>
  );
}
