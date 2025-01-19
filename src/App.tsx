import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Profile></Profile>
    </div>
  );
};

export default App;
