import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BackgroundShapes from './backgroundshapes';
import Name from './name';
import AboutMe from './aboutme';
import CaseStudies from "./casestudies";
import Skiservice from './routes/skiservice';
import Cardgame from './routes/cardgame';
import Sneakerresell from './routes/sneakerresell';
import Basketball from './routes/basketball';

function Home() {
  return (
    <>
      <Name />
      <AboutMe />
      <CaseStudies />
      <BackgroundShapes />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skiservice" element={<Skiservice />} />
        <Route path="/cardgame" element={<Cardgame />} />
        <Route path="/sneakerresell" element={<Sneakerresell />} />
        <Route path="/basketball" element={<Basketball />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
