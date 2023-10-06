import './App.css';
import Navbar from './Component/Navbar';
import Introduction from './Component/Introduction';
import ParticlesBackground from './Component/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <Navbar/>
      <Introduction/>
    </div>
  );
}

export default App;
