import React from "react";
import "./Profile.css";
import leo from "../../assets/images/leo.jpg";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="about">
        <h2>Olá! Eu sou</h2>
        <h1>Leonardo Rogelio</h1>
        <h3>Desenvolvedor Web FullStack</h3>
        <p>
          Sou um desenvolvedor web FullStack, com experiência em desenvolvimento
          de SPA's e arquitetura de micro serviços.
        </p>
      </div>
      <div className="photo">
        <img src={leo} alt="" />
      </div>
    </div>
  );
};

export default Profile;
