import Image from "next/image";
import Navbar from "./components/navbar";
import Prof from "./components/prof";
import About from "./components/about";
import Skills from "./components/skill";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Prof/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
