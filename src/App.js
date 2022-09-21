import {
  Navbar,
  About,
  Header,
  Footer,
  Skills,
  Work,
} from "./components/export";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />

      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
