import "./NavBar.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import leoro from "../../assets/images/leoro.gif";
import leorowhite from "../../assets/images/leorowhite.gif";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background-color", "#f8f8f8");
      root.style.setProperty("--background-color-secondary", "#ddd");
      root.style.setProperty("--text-color", "#111");
      root.style.setProperty("--accent-color", "#f60");
    } else {
      root.style.setProperty("--background-color", "black");
      root.style.setProperty("--background-color-secondary", "#111");
      root.style.setProperty("--text-color", "#f8f8f8");
      root.style.setProperty("--accent-color", "#f60");
    }
  };

  const socialLinks = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/leonardo-rogelio-silva-0930501a5/",
      img: linkedin,
    },
    {
      name: "github",
      url: "https://github.com/LeoRogelioSilva",
      img: github,
    },
  ];

  const internalLinks = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <div className="NavBar">
      <nav>
        <div className={`navitens`}>
          <div className="socialLinks">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.name}
              >
                <img src={link.img} alt={`${link.name} logo`} />
              </a>
            ))}
          </div>
          <div className="centerImage">
            <img src={isDarkMode ? leoro : leorowhite} alt="Logo" />
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider" />
          </label>
          <div className="internalLinks">
            {internalLinks.map((link) => (
              <h2 key={link.name}>
                <a href={link.url}>{link.name}</a>
              </h2>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
