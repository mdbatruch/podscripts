import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Podcasts from './Podcasts';
import Contact from './Contact';
import PodCastSingle from 'PodcastSingle';

function PageContent() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="podcasts/:name"
          element={<PodCastSingle />} />
      </Routes>
    </div>
  );
}

export default PageContent;
