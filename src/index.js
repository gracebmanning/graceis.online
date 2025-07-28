import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404/404';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import JustForFun, {justForFunRoutes} from './pages/JustForFun/JustForFun';
import Blog from './pages/Blog/Blog';
import SinglePost from './pages/Blog/SinglePost';
import Projects, { projectRoutes } from './pages/Projects/Projects';
import Surprise from './pages/Surprise/Surprise';
import Sources from './pages/Sources/Sources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/just-for-fun" element={<JustForFun/>} />
      {justForFunRoutes}
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:slug" element={<SinglePost/>} />
      <Route path="/projects" element={<Projects/>} />
      {projectRoutes}
      <Route path="/surprise" element={<Surprise/>} />
      <Route path="/sources" element={<Sources/>} />
    </Routes>
  </BrowserRouter>
);
