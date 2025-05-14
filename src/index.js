import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404/404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Art from './pages/Art/Art';
import { artRoutes } from './pages/Art/artList';
import Blog from './pages/Blog/Blog';
import { Posts, postRoutes } from './pages/Blog/BlogPosts';
import { Tags, tagRoutes } from './pages/Blog/BlogTags';
//import Projects from './components/Projects/Projects';
import { Projects2 } from './pages/Projects/Projects';
import { projectRoutes } from './pages/Projects/projectLists';
import Surprise from './pages/Surprise/Surprise';
import Sources from './pages/Sources/Sources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/art" element={<Art/>} />
      {artRoutes}
      <Route path="/blog" element={<Blog/>} />
      {postRoutes}
      <Route path="/blog/posts" element={<Posts/>} />
      <Route path="blog/tags" element={<Tags/>} />
      {tagRoutes}
      <Route path="/projects" element={<Projects2/>} />
      {projectRoutes}
      <Route path="/surprise" element={<Surprise/>} />
      <Route path="/sources" element={<Sources/>} />
    </Routes>
  </BrowserRouter>
);
