import { Knowledge } from "../types/knowledge.type";
import { knowledgeBase } from "./knowledge";

export class BuildKnowledgeBaseService {
  private knowledgeBase: Knowledge[];
  constructor() {
    this.knowledgeBase = [];
  }

  buildKnowledgeBase() {
    if (this.knowledgeBase.length === 0) {
      this.knowledgeBase = [];
      return;
    }
    const b = knowledgeBase.map((knowledge: Knowledge) => {
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
