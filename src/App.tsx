import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Profile></Profile>
      <Contact></Contact>
    </div>
  );
};

export default App;
