import './App.css';
import { daisies } from './assets/assets';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/404/404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <img className='backgroundImg' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
    </div>
  );
}

export default App;
