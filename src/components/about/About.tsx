import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="aboutme">
      <a href="#about">
        <h1 id="about">About Me</h1>
      </a>
      <div className="aboutmetldr">
        <p>
          Sou graduado em Tecnologia em Análise e Desenvolvimento de Sistemas
          pela Unicamp e possuo grau técnico em informática pelo IFSP de Campos
          do Jordão. Sempre me interessei mais pelo mundo da Web, embora já
          tenha tido contato com desenvolvimento mobile, blockchain, data
          science e machine learning.
        </p>
        <p>
          Trabalho profissionalmente como Desenvolvedor Web FullStack há mais de
          2 anos e comecei a fazer pequenos projetos como freelance já em 2018,
          acredito que o mundo web é o mais acessível, plural e completo nicho
          da tecnologia, com possibilidades e oportunidades infinitas, e gosto
          de explorar este vasto mundo que não se limita a javascript e html.
          Hoje trabalho com arquitetura de micro serviços no back end e com
          SPA's e PWA's no front end, e já trabalhei em sistemas monolíticos em
          PHP, Python e em Java.
        </p>
        <p>
          Gosto de entregar soluções inteligentes e práticas o tanto que gosto
          de lidar com stakeholders, gerenciar recursos e cumprir metas. Hoje
          meus hobbies incluem mais exercícios físicos, já gostei de tocar
          violão e piano, fazer trilhas de moto, tomar vinho e jogar, mas
          liderar pessoas e projetos são atividades que me trouxeram grande
          prazer e que aprecio bastante.
        </p>
      </div>
    </div>
  );
};

export default About;
