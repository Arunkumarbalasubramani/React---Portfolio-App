import {
  Homepage,
  About,
  Contact,
  Skills,
  Portfolio,
} from "./components/export";
import { Navbar } from "./container/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Portfolio />
      <Skills />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
