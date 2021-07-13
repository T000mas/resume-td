import React from "react";
import Stars from "./Stars";

export default function Abilities() {
  return (
    <div className="container">
      <div className="title">Abilities</div>
      <p></p>

      <div className="headline">Skills</div>
      <ul>
        <Stars name="React" number={4} />

        <Stars name="JavaScript" number={3} />
        <Stars name="CSS" number={3} />
        <Stars name="HTML" number={3} />
        <Stars name="Python" number={3} />
        <Stars name="Java" number={3} />

        <Stars name="PostgreSQL" number={2} />
        <Stars name="C++" number={2} />
        <Stars name="C#" number={2} />
        <Stars name="PHP" number={2} />

        <Stars name="TypeScript" number={1} />
        <Stars name="Scala" number={1} />
        <Stars name="Ocaml" number={1} />
        <Stars name=".NET" number={1} />
        <Stars name="Vue.js" number={1} />
        <Stars name="Assembler" number={1} />
      </ul>

      <div className="headline">Languages</div>
      <ul>
        <Stars name="Polish (Native)" number={6} />

        <Stars name="English (B2/C1)" number={5} />

        <Stars name="German (A2/B1)" number={3} />
      </ul>
      <div className="headline">Tools</div>
      <ul>
        <Stars name="MS Office" number={5} />
        <Stars name="Google Chrome" number={5} />
        <Stars name="Windows" number={5} />

        <Stars name="VS Code" number={4} />

        <Stars name="Git" number={3} />
        <Stars name="Android Studio" number={3} />

        <Stars name="Visual Studio" number={2} />
        <Stars name="Adobe Premiere" number={2} />

        <Stars name="Code Blocks" number={1} />
      </ul>
    </div>
  );
}
