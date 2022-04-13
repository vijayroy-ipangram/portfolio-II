import React from "react";

//-----> SCSS
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills_main">
      <h2>Skills</h2>
      <div className="skills" data-aos="fade-up" data-aos-duration="1500">
        <ul>
          <li>
            Strong knowledge of basic web technologies such as
            HTML,CSS,SCSS,Bootstrap and Javascript.
          </li>
          <li>
            Experience with front-end development with back-end system
            integration.
          </li>
          <li>Fetching API using react-axios</li>
          <li>
            Design ui components for UX-Library consisted of Button, Checkbox,
            Input, Icons, Toggle Button, Dropdown, Multi-Level Dropdown and many
            more using Material UI{" "}
          </li>
          <li>
            Maintained states in the stores and dispatched the actions using
            redux
          </li>
          <li>
            Added Dynamic Functionality by creating and dispatching Action
            Creators that deployed Actions.
          </li>
          <li>
            Strong knowledge of React JS framework and redux to develop the SPA.
          </li>
          <li>Self-motivated, good team player and Quick learner.</li>
          <li>Willing to learn and adopt new technologies.</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
