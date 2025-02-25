import MainFooter from "./components/footer/MainFooter";
import Case from "./components/main/Case";
import Contact from "./components/contactForm/Contact";
import Main from "./components/main/Main";
import { Services } from "./components/main/Services";
import Team from "./components/main/Team";
import Testimonials from "./components/main/Testimonials";
import Navbar from "./components/navbar/Navbar";
import EndFooter from "./components/footer/EndFooter";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Main />
        <MainFooter />
      </div>

      <div id="services">
        <Services />
      </div>
      <div id="case">
        <Case />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <EndFooter />
    </>
  );
}

export default App;
