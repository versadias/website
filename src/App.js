import './assets/styles/versadias.css';

// Components
import Header from './components/Header';
import Mint from './components/Mint';
import Metaverse from './components/Metaverse'
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div className="versadias">
      <Header />
      <Mint />
      <Metaverse />
      <Roadmap />
    </div>
  );
}

export default App;