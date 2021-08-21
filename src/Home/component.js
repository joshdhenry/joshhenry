import About from "../About/component";
import Contact from "../Contact/component";
import NavigationBar from "../NavigationBar/component";
import Pitch from "../Pitch/component";
import Portfolio from "../Portfolio/component";

const Home = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Pitch />
      <Portfolio />
      <About />
      <div style={{ height: "500px" }} />
      <Contact />
    </div>
  );
};

export default Home;
