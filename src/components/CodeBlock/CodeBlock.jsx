// component from Mark Centoni
// https://medium.com/@mark_centoni/adding-a-code-block-to-sanity-io-content-editor-and-display-in-a-react-frontend-3f0acba16787

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={tomorrowNightBright}
      customStyle={{
        padding: "1em",
        marginBottom: "2em",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
