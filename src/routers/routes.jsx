import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/404/404";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import JustForFun, { justForFunRoutes } from "../pages/JustForFun/JustForFun";
import { Posts, postRoutes } from "../pages/Blog/BlogPosts";
import { Tags, tagRoutes } from "../pages/Blog/BlogTags";
import Projects, { projectRoutes } from "../pages/Projects/Projects";
import Surprise from "../pages/Surprise/Surprise";
import Sources from "../pages/Sources/Sources";

export function MainRouter() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/just-for-fun" element={<JustForFun />} />
      {justForFunRoutes}
      <Route path="/projects" element={<Projects />} />
      {projectRoutes}
      <Route path="/surprise" element={<Surprise />} />
      <Route path="/sources" element={<Sources />} />
    </Routes>
  );
}

export function BlogRouter() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      {postRoutes}
      <Route path="/posts" element={<Posts />} />
      <Route path="/tags" element={<Tags />} />
      {tagRoutes}
    </Routes>
  );
}
