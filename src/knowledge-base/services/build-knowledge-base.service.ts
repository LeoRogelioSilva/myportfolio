import { Knowledge } from "../types/knowledge.type";
import { knowledgeBase } from "./knowledge";

export class BuildKnowledgeBaseService {
  private knowledgeBase: Knowledge[];
  constructor() {
    this.knowledgeBase = [];
  }

  buildKnowledgeBase() {
    const b = knowledgeBase.map((knowledge) => {
      return {
        title: knowledge.title,
        text: knowledge.text,
      };
    });
    this.knowledgeBase = b;
  }

  getKnowledgeBase() {
    return this.knowledgeBase;
  }
}
