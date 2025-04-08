import React, { ReactNode, useState } from "react";
import "./KnowledgeSection.css";

interface KnowledgeSectionProps {
  text: string;
  title: string;
  children?: ReactNode[];
}

const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  text,
  title,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="knowledge-section">
      <div className="header">
        <button onClick={toggleExpand} className="toggle-button">
          <span className={`arrow-icon ${isExpanded ? "expanded" : ""}`}>
            &#9654;
          </span>
        </button>
        <h3 className="section-title">{title}</h3>
      </div>
      {isExpanded && (
        <div className="knowledge-content">
          <p>{text}</p>
          {children && <div className="nested-knowledge">{children}</div>}
        </div>
      )}
    </div>
  );
};

export default KnowledgeSection;
