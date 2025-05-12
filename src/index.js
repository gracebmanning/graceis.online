import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Surprise from './components/Surprise/Surprise';
import Sources from './components/Sources/Sources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/surprise" element={<Surprise/>} />
      <Route path="/sources" element={<Sources/>} />
    </Routes>
  </BrowserRouter>
);
