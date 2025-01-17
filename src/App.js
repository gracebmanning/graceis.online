import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/404/404';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Explore from './components/Explore/Explore';
import Surprise from './components/Surprise/Surprise';
import Sources from './components/Sources/Sources';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/surprise" element={<Surprise/>} />
        <Route path="/sources" element={<Sources/>} />
      </Routes>
    </div>
  );
}

export default App;
