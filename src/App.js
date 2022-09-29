import {
  Homepage,
  About,
  Header,
  Footer,
  Skills,
  Work,
} from "./components/export";
import { Navbar } from "./container/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";
function App() {
  return (
    <div className="app w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 ">
      <Navbar />
      <Homepage />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
