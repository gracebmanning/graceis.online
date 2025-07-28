import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../sanityClient";
import CodeBlock from "../CodeBlock/CodeBlock";
import CaptionedImage from "../CaptionedImage/CaptionedImage";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      console.log(value.size);
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

  // You can also override the default HTML tags for marks, styles, etc.
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
  },
};

const PortableTextComponent = ({ content }) => {
  return <PortableText value={content} components={ptComponents} />;
};

export default PortableTextComponent;
