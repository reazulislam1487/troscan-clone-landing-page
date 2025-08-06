import About from "./Components/About";
import Design from "./Components/Design";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F8EDE3]">
      <About></About>
      <Design></Design>
      <Expertise></Expertise>
      <Footer></Footer>
    </div>
  );
}
