import "./NavBar.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import leoro from "../../assets/images/leoro.gif";

const NavBar: React.FC = () => {
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
            <img src={leoro} alt="Logo" />
          </div>
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
