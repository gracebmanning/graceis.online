import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanityClient";
import CodeBlock from "../CodeBlock/CodeBlock";
import CaptionedImage from "../CaptionedImage/CaptionedImage";
import { slugify } from "../../utility/slugify";
import { useEffect, useRef } from "react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const extractTextFromChildren = (children) => {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }
  if (children && children.props && children.props.children) {
    return extractTextFromChildren(children.props.children);
  }
  return '';
};


const PortableTextComponent = ({ content, onHeadingsExtracted }) => {
  const headingsRef = useRef([]);
  headingsRef.current = [];

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
        return <h1 id={id}>{children}</h1>;
      },
      h2: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 2, text, id });
        }
        return <h2 id={id}>{children}</h2>;
      },
      h3: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 3, text, id });
        }
        return <h3 id={id}>{children}</h3>;
      },
      h4: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 4, text, id });
        }
        return <h4 id={id}>{children}</h4>;
      },
      h5: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 5, text, id });
        }
        return <h5 id={id}>{children}</h5>;
      },
      h6: ({ children }) => {
        const text = extractTextFromChildren(children).trim();
        const id = slugify(text);
        if (text) {
          headingsRef.current.push({ level: 6, text, id });
        }
        return <h6 id={id}>{children}</h6>;
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
