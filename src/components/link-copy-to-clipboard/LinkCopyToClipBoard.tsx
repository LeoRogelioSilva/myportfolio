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
      .then(() => {})
      .catch((err) => {});
  };

  return (
    <div onClick={handleCopy} style={{ cursor: "pointer", userSelect: "none" }}>
      <h3>{text}</h3>
    </div>
  );
};

export default LinkCopyToClipboard;
