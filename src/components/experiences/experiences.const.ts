import { ExperienceProps } from "./experience/Experience";

export const experiences: ExperienceProps[] = [
  {
    title: "Desenvolvedor Web FullStack",
    description:
      "Desenvolvimento de aplicações web em arquitetura de micro serviços.",
    start: new Date(2023, 9, 16),
    company: "Empresa XYZ",
    location: "Limeira - SP / Remoto",
    technologies: [
      "Typescript",
      "Angular",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "RabbitMQ",
    ],
  },
  {
    title: "Estagiário em Desenvolvimento Web FullStack",
    description:
      "Desenvolvimento de um SPA e um PWA construídos em VueJS (Quasar) e back-end construído em Java com Spring Boot.",
    start: new Date(2022, 7),
    end: new Date(2023, 9, 15),
    company: "Empresa ABC",
    location: "Rio de Janeiro, RJ",
    technologies: ["VueJS", "Quasar", "Java", "Spring Boot", "PostgreSQL"],
  },
];
