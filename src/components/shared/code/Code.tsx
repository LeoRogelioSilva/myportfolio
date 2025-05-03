import React from "react";
import Button from "../button/Button";
import { useTheme } from "../../ThemeContext";

interface CodeProps {
  code: string;
}

const Code: React.FC<CodeProps> = ({ code }) => {
  const { isDarkMode } = useTheme();
  const [show, setShow] = React.useState(false);
  const SyntaxHighlighter = require("react-syntax-highlighter").Prism;
  const styleDark =
    require("react-syntax-highlighter/dist/esm/styles/prism").gruvboxDark;
  const styleLight =
    require("react-syntax-highlighter/dist/esm/styles/prism").gruvboxLight;

  return (
    <div className="code">
      <Button
        label={show ? "Hide code" : "Show Code"}
        onClick={() => setShow(!show)}
      ></Button>
      {show && (
        <pre>
          <SyntaxHighlighter
            language="typescript"
            style={isDarkMode ? styleDark : styleLight}
          >
            {code}
          </SyntaxHighlighter>
        </pre>
      )}
    </div>
  );
};

export default Code;
