import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../sanityClient';
import CodeBlock from '../CodeBlock/CodeBlock';

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
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(800).auto('format').url()}
          className="portable-text-image"
        />
      );
    },
    code: ({ value }) => {
      return <CodeBlock value={value} />
    },
  },

  // You can also override the default HTML tags for marks, styles, etc.
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
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