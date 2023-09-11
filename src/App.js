import { Routes, Route } from "react-router-dom";

import Home from './pages/Home.js'
import Services from './pages/Services.js'
import PageNotFound from './pages/PageNotFound.js'

import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import PPolicy from "./pages/PPolicy.js";
import CPolicy from "./pages/CPolicy.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="privacy-policy" element={<PPolicy />} />
        <Route path="cookie-policy" element={<CPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
