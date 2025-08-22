import "./Projects.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BasicLayout } from "../../layouts/BasicLayout";
import sanityClient from "../../sanityClient";
import { projectQuery } from "../../queries/projectQuery";
import PortableTextComponent from "../../components/PortableText/PortableText";
import { MdArrowOutward } from "react-icons/md";
import Badge from "../../components/Badges/Badges";
import { formatMoYrDate } from "../../utility/formatMoYrDate";

export default function SingleProject() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [singleProject, setSingleProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleBackClick = () => {
    if (!singleProject) {
      return;
    }
    const backPath =
      singleProject.type === "commercial" ? "/projects" : "/just-for-fun";
    navigate(backPath);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true);
    sanityClient
      .fetch(projectQuery, { slug })
      .then((data) => {
        if (data) {
          setSingleProject(data);
        } else {
          setError("Post not found.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch post.");
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <BasicLayout title="Loading..." content="Loading..." bg={false} />;
  }

  if (error) {
    return <BasicLayout title="Error" content={error} bg={false} />;
  }

  if (!singleProject) {
    return (
      <BasicLayout
        title="Not Found"
        content="This post could not be found."
        bg={false}
      />
    );
  }

  const content = (
    <div className="singleProject">
      <button className="backButton" onClick={handleBackClick}>
        ← back
      </button>
      <img
        src={singleProject.thumbnail.asset.url}
        alt={singleProject.thumbnail.alt}
      />
      <h1>{singleProject.title.toLowerCase()}</h1>
      <div className="singleProjectDetails">
        <p className="singleProjectDate">
          {formatMoYrDate(singleProject.date)}
        </p>
        {singleProject.externalLink === null ? null : (
          <a
            href={singleProject.externalLink.linkURL}
            target="_blank"
            rel="noreferrer"
          >
            {singleProject.externalLink.linkText}
            <MdArrowOutward style={{ marginLeft: "2px", fontSize: "18px" }} />
          </a>
        )}
      </div>
      <div className="singleProjectBadges">
        {singleProject.tags.map((tag) => (
          <Badge key={tag} size={"medium"} type={tag.title} />
        ))}
        {singleProject.isFeatured ? (
          <Badge size={"medium"} type={"featured"} />
        ) : null}
        {singleProject.isOngoing ? (
          <Badge size={"medium"} type={"ongoing"} />
        ) : null}
      </div>
      <div className="singleProjectBody">
        <PortableTextComponent content={singleProject.body} />
      </div>
      <button className="backToTop" onClick={scrollToTop}>
        ↑ back to top
      </button>
    </div>
  );

  return (
    <BasicLayout title={singleProject.title} content={content} bg={false} />
  );
}
