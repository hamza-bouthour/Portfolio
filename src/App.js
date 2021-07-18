import { useState } from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/aboutMe";
import "./app.scss"

function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="app">
      <Topbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <AboutMe />
          <Contact />
      </div>
    </div>
  );
}

export default App;
