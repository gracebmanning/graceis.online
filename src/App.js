import './App.css';
import fish from './assets/fish.png';
import ladybug from './assets/ladybug.png';

function App() {
  return (
    <div className="App">
      Test App
      <img className="fish" src={fish} alt="fish with white, blue, a yellow scales." />
      <img className="ladybug" src={ladybug} />
    </div>
  );
}

export default App;
