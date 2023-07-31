import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Podcasts from './Podcasts';
import Contact from './Contact';
import Slider from 'stuff/Slider';
import Typer from 'stuff/Typer';

function PageContent() {
  useEffect(() => {}, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default PageContent;
