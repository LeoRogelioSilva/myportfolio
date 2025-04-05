import React from "react";
import "./Contact.css";
import LinkCopyToClipboard from "../link-copy-to-clipboard/LinkCopyToClipBoard";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contacts">
        <LinkCopyToClipboard
          text="📧 leorogelio1202@gmail.com"
          value="leorogelio1202@gmail.com"
        ></LinkCopyToClipboard>
        <LinkCopyToClipboard
          text="📞 +55(12)997849493"
          value="+55(12)997849493"
        ></LinkCopyToClipboard>
        <h3>
          👥{" "}
          <a href="https://www.linkedin.com/in/leonardo-rogelio-silva-0930501a5/">
            LinkedIn
          </a>
        </h3>
        <h3>
          👨‍💻 <a href="https://github.com/LeoRogelioSilva">GitHub</a>
        </h3>{" "}
      </div>
    </div>
  );
};

export default Contact;
