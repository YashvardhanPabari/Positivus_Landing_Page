import MainFooter from "./components/footer/MainFooter";
import Case from "./components/main/Case";
import Main from "./components/main/Main";
import { Services } from "./components/main/Services";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <MainFooter />
      <Services />
      <Case />
    </>
  );
}

export default App;
