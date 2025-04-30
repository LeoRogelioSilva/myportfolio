import React, { useEffect, useState } from "react";
import "./KnowledgeBase.css";
import KnowledgeSection from "./knowledge-section/KnowledgeSection";
import { BuildKnowledgeBaseService } from "./services/build-knowledge-base.service";
import BinarySearchComponent from "./data-structure/bynary-search/BinarySearch";

const KnowledgeBase: React.FC = () => {
  const [knowledgeSections, setKnowledgeSections] = useState<any[]>([]);

  useEffect(() => {
    const knowledgeBuildService = new BuildKnowledgeBaseService();
    knowledgeBuildService.buildKnowledgeBase();
    const sections = knowledgeBuildService.getKnowledgeBase();
    setKnowledgeSections(sections);
  }, []);

  return (
    <div className="knowledge-base">
      <h1>Base de conhecimento</h1>
      <KnowledgeSection
        title="Data Structure"
        text="Some important data structures implemented using typescript."
        children={[<BinarySearchComponent />]}
      ></KnowledgeSection>
      {knowledgeSections.map((section, index) => (
        <KnowledgeSection
          key={index}
          title={section.title}
          text={section.text}
        ></KnowledgeSection>
      ))}
    </div>
  );
};

export default KnowledgeBase;
