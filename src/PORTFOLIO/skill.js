import Skillblock from "./skillblock";
import "./skill.css";
import { FaAngular, FaBootstrap, FaCss3Alt, FaDatabase, FaFileCode, FaHtml5, FaJava, FaJs, FaLaptopCode, FaNodeJs, FaReact, FaSass } from "react-icons/fa6";
function Skill() {
    let skillArr = [{
        icon: <FaHtml5 color="#1B3C73" fontSize={"5rem"} />,
        skill: "HTML 5",
        Note: "HTML version-5 for creating the structure of the website",
        star: 5
    }, {
        icon: <FaCss3Alt color="orange" fontSize={"5rem"} />,
        skill: "CSS 3",
        Note: "Responsive web Design",
        star: 5
    }, {
        icon: <FaJs color="Green" fontSize={"5rem"} />,
        skill: "Javascript",
        Note: "With ES6 Version of Javascript,Scripting effective code",
        star: 5
    }, {
        icon: <FaReact color="#40A2E3" fontSize={"5rem"} />,
        skill: "React.js",
        Note: "Excellent knowledge on Hooks,Props,Components.",
        star: 5
    }, {
        icon: <FaAngular color="violet" fontSize={"5rem"} />,
        skill: "Angular.js",
        Note: "Have Knowledge on Basic concept of Angular",
        star: 3
    }, {
        icon: <FaNodeJs color="darkgreen" fontSize={"5rem"} />,
        skill: "Node.js",
        Note: "Node.js-For Run Time Environment",
        star: 4
    }, {
        icon: <FaLaptopCode color="#81689D" fontSize={"5rem"} />,
        skill: "Express.js",
        Note: "Express.js-For creating servers and API",
        star: 4
    }, {
        icon: <FaDatabase color="#E8C872" fontSize={"5rem"} />,
        skill: "Mongo DB",
        Note: "Mongo DB as primary Database",
        star: 4
    }, {
        icon: <FaFileCode color="#0D9276" fontSize={"5rem"} />,
        skill: "Typescript",
        Note: "Basic knowledge on Typescript concepts",
        star: 4
    }, {
        icon: <FaBootstrap color="violet" fontSize={"5rem"} />,
        skill: "Frameworks",
        Note: "Bootstrap and Tailwind",
        star: 4
    }, {
        icon: <FaSass color="pink" fontSize={"5rem"} />,
        skill: "SASS",
        Note: "SASS-for advanced CSS works",
        star: 4
    }, {
        icon: <FaJava color="red" fontSize={"5rem"} />,
        skill: "JAVA",
        Note: "Basic knowledge on Java OOPS concept",
        star: 4
    }]
    return <div className="skill">
        <h1>Skills</h1>
        {skillArr.map(e => {
            return <Skillblock icon={e.icon} skill={e.skill} Note={e.Note} star={e.star} />
        })}
    </div>
}
export default Skill;