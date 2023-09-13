import About from "About";
import Contact from "Contact";
import Home from "Home";
import Podcasts from "Podcasts";
import PodCastSingle from "PodcastSingle";
import PodcastTitle from "PodcastTitle";
import { Route, Routes } from "react-router-dom";
import SignIn from "SignIn";
import SubmitPodcast from "SubmitPodcast";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="podcasts/:name" element={<PodcastTitle />} />
            <Route path="podcasts/:name/:podcast" element={<PodCastSingle />} />
            <Route path="submit" element={<SubmitPodcast />} />
            <Route path="loginregister" element={<SignIn />} />
      </Routes>
    );
  }
  
  export default RoutesComponent;