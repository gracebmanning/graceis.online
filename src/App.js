import './App.css';
import { daisies } from './assets/assets';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <img className='backgroundImg' src={daisies} alt='two daisies with smaller purple blooms and surrounding greenery' />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
