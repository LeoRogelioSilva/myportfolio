import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import KnowledgeBase from "./knowledge-base/KnowledgeBase";
import { ThemeProvider } from "./components/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar></NavBar>
        <Profile></Profile>
        <About></About>
        <Experiences></Experiences>
        <KnowledgeBase></KnowledgeBase>
        <Contact></Contact>
      </div>
    </ThemeProvider>
  );
};

export default App;
