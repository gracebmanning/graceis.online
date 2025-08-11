import "./TableOfContents.css";

const TableOfContents = ({ headings }) => {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="tableOfContents">
      <h3 className="tableOfContentsHeader">Contents</h3>
      <ul className="tableOfContentsList">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`tableOfContentsListItem ml-${(heading.level - 1) * 4}`}
          >
            <a className="tableOfContentsLink" href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
