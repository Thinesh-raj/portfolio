import About from "./About";
import Skill from "./skill";
import "./cover.css"
import Project from "./project";
import Contact from "./contact";
import { useRef, useState } from "react";
import Education from "./Education";
import { FaBars, FaChevronUp } from "react-icons/fa6";

function Cover() {
  const [hide, setHide] = useState(false)
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  function scrollTo(ref) {
    ref.current.scrollIntoView({ behaviour: "smooth", block: "start" })
    window.scrollBy(0, -90)
  }
  return <div>
    <div className="topSection">
      <div className="topPart1"><h2>MY PORTFOLIO</h2></div>
      <div className="topPart2">
        <span onClick={() => scrollTo(ref1)}>About</span>
        <span onClick={() => scrollTo(ref2)}>Education</span>
        <span onClick={() => scrollTo(ref3)}>Skills</span>
        <span onClick={() => scrollTo(ref4)}>Project</span>
        <span onClick={() => scrollTo(ref5)}>Contact</span>
        <div className="scroll" onClick={() => setHide(!hide)}><FaBars /></div>
        {
          hide && <div className="drop">
            <span onClick={() => scrollTo(ref1)}>About</span>
            <span onClick={() => scrollTo(ref2)}>Education</span>
            <span onClick={() => scrollTo(ref3)}>Skills</span>
            <span onClick={() => scrollTo(ref4)}>Project</span>
            <span onClick={() => scrollTo(ref5)}>Contact</span>
          </div>
        }
      </div>
      <div className="arrow" onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}><FaChevronUp /></div>
    </div>
    <div ref={ref1}><About /></div>
    <div ref={ref2}><Education /></div>
    <div ref={ref3}><Skill /></div>
    <div ref={ref4}><Project /></div>
    <div ref={ref5}><Contact /></div>
  </div>
}
export default Cover;