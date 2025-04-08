import React from "react";
import "./Experience.css";

export interface ExperienceProps {
  title: string;
  description: string;
  start: Date;
  end?: Date;
  company: string;
  location: string;
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  description,
  start,
  end,
  company,
  location,
  technologies,
}) => {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>
        <span role="img" aria-label="location">
          📍
        </span>
        {company} - {location}
      </p>
      <div className="datas">
        <div className="start">{start.toLocaleDateString()}</div>
        <span> - </span>
        <div className="end">
          {end ? end.toLocaleDateString() : "Atualmente"}
        </div>
      </div>
      <p>
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
    </div>
  );
};

export default Experience;
