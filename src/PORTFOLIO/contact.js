import { Link } from "react-router-dom";
import "./contact.css"
import { FaGithub, FaLinkedin } from "react-icons/fa6";
function Contact(){
  return <div className="contact">
    <h1>Contact</h1>
    <p>Phone</p>
    <h2>9944999259</h2>
    <p>E-Mail</p> 
    <a href="mailto:snthineshraj2002@gmail.com" className="mail"><h2>snthineshraj2002@gmail.com</h2></a>
    <Link to="https://www.linkedin.com/in/thineshraj-s-n-ba4016249" className="linkin"><FaLinkedin/></Link>
    <Link to={"https://github.com/Thinesh-raj"} className="linkin"><FaGithub/></Link>
  </div>
}
export default Contact;