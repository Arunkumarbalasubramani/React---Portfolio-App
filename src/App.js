import { Homepage, About, Footer, Skills, Work } from "./components/export";
import { Navbar } from "./container/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
function App() {
  return (
    <div>
      <Navbar />
      <Homepage />

      <About />
      <Skills />
      <Work />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
