import About from "./Components/About";
import Design from "./Components/Design";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import News from "./Components/News";

export default function Home() {
  return (
    <div className="bg-[#F8EDE3]">
      <About></About>
      <Design></Design>
      <Expertise></Expertise>
      <News></News>
      <Footer></Footer>
    </div>
  );
}
