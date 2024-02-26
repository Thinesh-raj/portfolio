import { useRef, useState } from "react";
import BG1 from "./Images/Thineshraj S N.jpg";
import bg1 from "./Images/bg1.png";
import bg2 from "./Images/bg2.png";
import bg3 from "./Images/bg3.png";
import "./Mainpage.scss";
import { FaAngular, FaBars, FaBuildingColumns, FaCss3Alt, FaDatabase, FaGithub, FaGraduationCap, FaHtml5, FaJs, FaLaptopCode, FaLinkedin, FaLinkedinIn, FaNodeJs, FaReact, FaSass, FaSchool } from "react-icons/fa6"
import { Link } from "react-router-dom";
function Mainpage() {
    const [show,setShow]=useState(false);
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const scroll = (ref) => {
        ref.current.scrollIntoView({ behaviour: "smooth", block: "start" })
    }
    return <div id="Main">
        <header>
            <div className="navbar">
                <div id="navpart1">
                    <div>
                        <img src={BG1} alt="404" />
                    </div>
                    <h2>THINESHRAJ</h2>
                </div>
                <div id="navpart2">
                    <h4 onClick={() => scroll(ref1)}>Home</h4>
                    <h4 onClick={() => scroll(ref2)}>About</h4>
                    <h4 onClick={() => scroll(ref3)}>Education</h4>
                    <h4 onClick={() => scroll(ref4)}>Projects</h4>
                    <h4 onClick={() => scroll(ref5)}>Contact</h4>
                </div>
                <FaBars className="bars" onClick={()=>setShow(!show)}/>
                {show&&<div id="float">
                    <h4 onClick={() => scroll(ref1)}>Home</h4>
                    <h4 onClick={() => scroll(ref2)}>About</h4>
                    <h4 onClick={() => scroll(ref3)}>Education</h4>
                    <h4 onClick={() => scroll(ref4)}>Projects</h4>
                    <h4 onClick={() => scroll(ref5)}>Contact</h4>
                </div>}
            </div>
        </header>
        <main>
            <div className="Home" ref={ref1}>
                <div>
                    <h1>Hey,I'm Thineshraj Sivaji</h1>
                    <p>A Result-Oriented Web Developer building and managing Websites and Web</p>
                    <p>Applications that leads to the success of the overall product.</p>
                    <div>
                        <Link to={"/page/resume"}>Resume</Link>
                        <p></p>
                        <small>(Click to view resume)</small>
                    </div>
                </div>
            </div>
            <div className="about" ref={ref2}>
                <div className="abouthead">
                    <h1>About Me</h1>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms</p>
                    <p>of programming and technology</p>
                </div>
                <div className="aboutpart1">
                    <h1>Get to Know Me !</h1>
                    <p>I'm a <b>Frontend Focused Web Developer</b> building and managing the Front-end of <b>Websites </b>and <b>Web Applications</b> that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    <p>To enhance my professional skills, capabilities and knowledge in an organization which recognizes the value of hard work and trusts me with <b>responsibilities</b> and <b>challenges</b></p>
                    <p>I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my <b>skills</b> and experience then don't hesitate to contact me.</p>
                    <button onClick={() => scroll(ref5)}>Contact</button>
                </div>
                <div className="aboutpart2">
                    <h1>My skills</h1>
                    <div><FaHtml5 color="#0C359E" className="i" />
                        <h2>HTML-5</h2></div>
                    <div><FaCss3Alt color="orange" className="i" />
                    <h2>CSS-3</h2></div>
                    <div><FaJs color="green" className="i" />
                    <h2>Javascript</h2></div>
                    <div ><FaReact color="#59D5E0" className="i" />
                    <h2>React.js</h2></div>
                    <div><FaNodeJs color="darkgreen" className="i" />
                    <h2>Node.js</h2></div>
                    <div><FaAngular color="red" className="i" />
                    <h2>Angular.js</h2></div>
                    <div ><FaSass color="pink" className="i" />
                    <h2>SASS</h2></div>
                    <div><FaLaptopCode color="#9290C3" className="i" />
                    <h2>Typescript</h2></div>
                    <div><FaDatabase color="#ECB159" className="i" />
                    <h2>Mongo DB</h2></div>
                </div>
            </div>
            <div ref={ref3} className="education">
                <h1>Education</h1>
                <div className="content">
                    <div className="box1">
                        <FaSchool className="i" />
                        <p>Rani Meyyammai Matriculation School Puliyur</p>
                        <h3>SSLC-92%</h3>
                        <p>2016-2017</p>
                    </div>
                    <div className="box2">
                        <FaBuildingColumns className="i" />
                        <p>Bharani Park Matric Higher Secondary School</p>
                        <h3>HLC-79%</h3>
                        <p>2018-2019</p>
                    </div>
                    <div className="box3">
                        <FaGraduationCap className="i" />
                        <p>Anna University Regional Campus Coimbatore</p>
                        <h3>B.E-EEE(82%)</h3>
                        <p>2019-2023</p>
                    </div>
                </div>
                <div className="course"><h2>Course</h2>
                    <p>I have done 6 months certifitied course in Full Stack Web Development in Crampete Learning Centre-Chennai.</p>
                    <Link to={"/page/certificate"}>Certificate</Link></div>
            </div>
            <div className="project" ref={ref4}>
                <h1>Projects</h1>
                <div className="content">
                    <div><img src={bg1} alt="404" /> </div>
                    <div className="cont cont1">
                        <h2>School Management Website</h2>
                        <p><b>Description :</b> Built an website for a school where you can see all the revelant details about the school and through this website the Admin,Teacher and Student can access to their respective webpage. This website is completely user-friendly and easy to use.</p>
                    </div>
                    <div className="small"><img src={bg2} alt="404" /></div>
                    <div className="cont cont2">
                        <h2>Home Rental Website</h2>
                        <p><b>Description :</b>Home rental website is a platform where you can rent home based upon your needs and preference. In this website you can rent house,villa,small apartments and price will be charged on basis of the type of home you are choosing.</p>
                    </div>
                    <div className="large"><img src={bg2} alt="404" /></div>
                    <div><img src={bg3} alt="404" /></div>
                    <div className="cont cont1">
                        <h2>Small Projects</h2>
                        <p><b>Projects :</b>Tic-Tac-Toe game,Weather Api,Some static templates</p>
                        <p><b>Description :</b> For the basic understanding of the Web tools,I have developed some static responsive website and Games with React.js.</p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer" ref={ref5}>
                <h1>Contact</h1>
                <h4>Phone</h4>
                <h2>9944999259</h2>
                <h4>E-mail</h4>
                <h2><a href="mailto:snthineshraj2002@gmail.com">snthineshraj2002@gmail.com</a></h2>
                <Link to="https://www.linkedin.com/in/thineshraj-s-n-ba4016249" className="linkin"><FaLinkedinIn /></Link>
                <Link to={"https://github.com/Thinesh-raj"} className="linkin"><FaGithub /></Link>
            </div>
        </footer>
    </div>
}
export default Mainpage;