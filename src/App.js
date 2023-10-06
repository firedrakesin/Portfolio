import './App.css';
import Navbar from './Component/Navbar';
import Introduction from './Component/Introduction';
import ParticlesBackground from './Component/ParticlesBackground';
import LogoSlider from './Component/LogoSlider ';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <Navbar/>
      <Introduction/>
      <LogoSlider/>
    </div>
  );
}

export default App;
