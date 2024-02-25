import bg from "./Images/Thineshraj S N.jpg";
import {FaFolderOpen } from "react-icons/fa6"
import "./About.css"
import { Link } from "react-router-dom";
function About() {
    return <div className="about">
        <div className="aboutPart1"><img src={bg} alt="404"></img></div>
        <div className="aboutPart2">
            <h1>About me</h1>
            <p>I am Thineshraj, a passionate Full Stack Developer with a excellent Front-end knowledge and good with Back-end Technologies.
                My motive is to gain all the essential knowledgeto become a full-fledged Full Stack Developer.
            </p>
            <h1>Objective</h1>
            <p>To enhance my professional skills, capabilities and knowledge in an organization which recognizes the value of
                hard work and trusts me with responsibilities and challenges.
            </p>
            <Link to="/resume">Resume<FaFolderOpen/></Link>
        </div>
    </div>
}
export default About;