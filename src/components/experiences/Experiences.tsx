import React from "react";
import { experiences } from "./experiences.const";
import Experience from "./experience/Experience";
import "./Experiences.css";

const Experiences: React.FC = () => {
  return (
    <div className="experiences">
      <h1>Profissional Experiences</h1>
      {experiences.map((experience, index) => (
        <>
          <Experience
            title={experience.title}
            technologies={experience.technologies}
            description={experience.description}
            start={experience.start}
            end={experience.end}
            company={experience.company}
            location={experience.location}
          ></Experience>
          {index < experiences.length - 1 && (
            <div className="vertical-line"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default Experiences;
