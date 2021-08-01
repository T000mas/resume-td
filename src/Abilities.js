import React from "react";
import Stars from "./Stars";

export default function Abilities() {
  return (
    <div className="container abilities">
      <div className="title">Abilities</div>
      <p>
        Below I made a summary of my skills and on what level I think I am. I
        tried to be as objective as I could in creating this list but it's hard
        for me to evaluate my actual skills.
      </p>
      <div className="skills">
        <div className="headline">Programming</div>
        <ul>
          <Stars name="React" number={3} />
          <Stars name="Python" number={3} />

          <Stars name="JavaScript" number={2} />
          <Stars name="CSS" number={2} />
          <Stars name="HTML" number={2} />
          <Stars name="Java" number={2} />
          <Stars name="C#" number={2} />

          <Stars name="PostgreSQL" number={1} />
          <Stars name="C++" number={1} />
          <Stars name="PHP" number={1} />
          <Stars name="TypeScript" number={1} />
          <Stars name="Scala" number={1} />
          <Stars name="Ocaml" number={1} />
          <Stars name=".NET" number={1} />
          <Stars name="Vue.js" number={1} />
          <Stars name="Assembler" number={1} />
        </ul>
      </div>
      <div className="languagesTools">
        <div className="headline">Languages</div>
        <ul>
          <Stars name="Polish (Native)" number={6} />

          <Stars name="English (B2/C1)" number={5} />

          <Stars name="German (A2/B1)" number={3} />
        </ul>
        <div className="headline">Tools</div>
        <ul>
          <Stars name="Windows" number={5} />

          <Stars name="MS Office" number={4} />
          <Stars name="Google Chrome" number={4} />
          <Stars name="VS Code" number={4} />

          <Stars name="Android Studio" number={3} />

          <Stars name="Git" number={2} />
          <Stars name="Visual Studio" number={2} />
          <Stars name="Adobe Premiere" number={2} />

          <Stars name="Code Blocks" number={1} />
          <Stars name="Microsoft SQL Server Management Studio" number={1} />
          <Stars name="SQL Server Integration Services" number={1} />
          <Stars name="Tableau prep" number={1} />
        </ul>
      </div>
      <div className="legend">
        <div className="headline">Legend:</div>
        <ul>
          <Stars
            name="Familiar with the basics | used during studies"
            number={1}
          />
          <Stars name="Junior knowledge | done some projects" number={2} />
          <Stars
            name="Junior/Regular knowledge | done projects, studied subject more thoroughly"
            number={3}
          />
          <Stars name="Regular" number={4} />
          <Stars name="Regular/Senior" number={5} />
          <Stars name="Senior" number={6} />
        </ul>
      </div>
    </div>
  );
}
