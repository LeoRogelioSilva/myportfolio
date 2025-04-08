import React from "react";
import "./Contact.css";
import LinkCopyToClipboard from "../link-copy-to-clipboard/LinkCopyToClipBoard";

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactme">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or would like to get in touch, feel free to
          reach out to me via email or phone. I'm always open to discussing new
          opportunities and collaborations.
        </p>
        <p>
          You can also find me on LinkedIn and GitHub. Let's connect and
          collaborate!
        </p>
      </div>
      <div className="contacts">
        <LinkCopyToClipboard
          text="📧 leorogelio1202@gmail.com"
          value="leorogelio1202@gmail.com"
        ></LinkCopyToClipboard>
        <LinkCopyToClipboard
          text="📞 +55(12)997849493"
          value="+55(12)997849493"
        ></LinkCopyToClipboard>
        <div>
          <h3>
            👥{" "}
            <a href="https://www.linkedin.com/in/leonardo-rogelio-silva-0930501a5/">
              LinkedIn
            </a>
          </h3>
        </div>
        <div>
          <h3>
            👨‍💻 <a href="https://github.com/LeoRogelioSilva">GitHub</a>
          </h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
