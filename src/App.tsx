import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Profile></Profile>
      <About></About>
      <Experiences></Experiences>
      <Contact></Contact>
    </div>
  );
};

export default App;
