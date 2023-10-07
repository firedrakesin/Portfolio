import './App.css';
import Navbar from './Component/Navbar';
import Introduction from './Component/Introduction';
import ParticlesBackground from './Component/ParticlesBackground';
import LogoSlider from './Component/LogoSlider ';
import Mywork from './Component/Mywork';
import Other from './Component/Other';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <Navbar/>
      <Introduction/>
      <LogoSlider/>
      <Mywork/>
      <Other/>
    </div>
  );
}

export default App;
