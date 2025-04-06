import React from "react";

interface LinkCopyToClipboardProps {
  text: string;
  value: string;
}

const LinkCopyToClipboard: React.FC<LinkCopyToClipboardProps> = ({
  text,
  value,
}) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        showPopup("Copiado!");
      })
      .catch((err) => {});
  };

  const showPopup = (message: string) => {
    const popup = document.createElement("div");
    popup.textContent = message;
    popup.style.position = "fixed";
    popup.style.top = "80%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "var(--background-color-secondary)";
    popup.style.color = "var(--accent-color)";
    popup.style.borderColor = "var(--accent-color)";
    popup.style.border = "1px solid var(--accent-color)";
    popup.style.fontWeight = "bold";
    popup.style.padding = "10px";
    popup.style.borderRadius = "35px";
    popup.style.zIndex = "1000";
    popup.style.transition = "opacity 0.5s";
    popup.style.opacity = "1";

    document.body.appendChild(popup);
    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 300);
    }, 500);
  };

  return (
    <div onClick={handleCopy} style={{ cursor: "pointer", userSelect: "none" }}>
      <h3>{text}</h3>
    </div>
  );
};

export default LinkCopyToClipboard;
