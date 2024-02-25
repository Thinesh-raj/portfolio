import { Link } from "react-router-dom";
import bg1 from "./Images/Resume-1.jpg";
import bg2 from "./Images/Resume-2.jpg";
import "./resume.css";
function Resume() {
    return <div className="resume">
        <div className="head">
            <h1>Resume</h1>
            <Link to={"/"} >Back</Link></div>
        <p></p>
        <img src={bg1} alt="404" />
        <img src={bg2} alt="404" />
    </div>
}
export default Resume;