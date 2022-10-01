import {
  Homepage,
  About,
  Footer,
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

      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
