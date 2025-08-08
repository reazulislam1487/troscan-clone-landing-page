import About from "./Components/About";
import ShowCase from "./Components/ShowCase";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import GetInTouch from "./Components/GetInTouch";
import News from "./Components/News";
import Projects from "./Components/Projects";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <div className="bg-[#F8EDE3]">

      <Header></Header>
      <Banner></Banner>

      {/* Main content sections */}
      <About></About>
      <ShowCase></ShowCase>
      <Projects></Projects>
      <Expertise></Expertise>
      <GetInTouch></GetInTouch>
      <News></News>
      <Footer></Footer>
    </div>
  );
}
