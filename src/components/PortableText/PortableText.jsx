import "./PortableText.css";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanityClient";
import CodeBlock from "../CodeBlock/CodeBlock";
import CaptionedImage from "../CaptionedImage/CaptionedImage";
import { slugify } from "../../utility/slugify";
import { useEffect, useRef, useState } from "react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const extractTextFromChildren = (children) => {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (children && children.props && children.props.children) {
    return extractTextFromChildren(children.props.children);
  }
  return "";
};

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

const PortableTextComponent = ({ content, onHeadingsExtracted }) => {
  const headingsRef = useRef([]);
  headingsRef.current = [];

  const [copiedLink, setCopiedLink] = useState("");

  const handleCopyLink = (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopiedLink(id);
        setTimeout(() => setCopiedLink(""), 2000); // reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <CaptionedImage
            source={urlFor(value).url()}
            alt={value.alt || " "}
            caption={value.caption || ""}
            size={value.size || "medium"}
          />
        );
      },
      code: ({ value }) => {
        const { code, language } = value;
        return <CodeBlock code={code} language={language} />;
      },
    },
    block: {
      h1: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 1, text, id });
        }
        return (
          <h1 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h1>
        );
      },
      h2: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 2, text, id });
        }
        return (
          <h2 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h2>
        );
      },
      h3: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 3, text, id });
        }
        return (
          <h3 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h3>
        );
      },
      h4: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 4, text, id });
        }
        return (
          <h4 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h4>
        );
      },
      h5: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 5, text, id });
        }
        return (
          <h5 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h5>
        );
      },
      h6: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 6, text, id });
        }
        return (
          <h6 id={id} className="heading-with-link">
            {children}
            <button
              onClick={() => handleCopyLink(id)}
              className="copy-link-button"
              aria-label={`Copy link to ${text}`}
            >
              {copiedLink === id ? <CheckIcon /> : <LinkIcon />}
            </button>
          </h6>
        );
      },
      normal: ({ children }) => <p>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a href={value.href} rel={rel} target="_blank">
            {children}
          </a>
        );
      },
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
  };

  useEffect(() => {
    if (onHeadingsExtracted) {
      onHeadingsExtracted([...headingsRef.current]);
    }
  }, [content, onHeadingsExtracted]);

  return <PortableText value={content} components={ptComponents} />;
};

export default PortableTextComponent;
