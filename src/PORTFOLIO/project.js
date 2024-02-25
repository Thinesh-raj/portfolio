import bg1 from "./Images/Screenshot (32).png";
import bg5 from "./Images/Screenshot (35).png";
import bg9 from "./Images/Screenshot (37).png";

import "./project.css";
function Project() {
   return <div className="project">
      <h1>Project</h1>
      <div className="content1">
         <div className="img1 img"><img src={bg1} alt="404" /></div>
      </div>
      <div className="content2">
         <h2>School Management Website</h2>
         <h4>Description :</h4>
         <p>Built an website for a school where you can see all the revelant details about the school and through this website the Admin,Teacher and Student can access to their respective webpage.
            This website is completely user-friendly and easy to use.
         </p>
      </div>
      <div className="content7">
         <img src={bg5} alt="" />
      </div>
      <div className="content3">
         <h2>Home Rental Website</h2>
         <h4>Description :</h4>
         <p>
            Home rental website is a platform where you can rent home based upon your needs and preference.
            In this website you can rent house,villa,small apartments and price will be charged on basis of the type of home you are choosing
         </p>
      </div>
      <div className="content4">
         <img src={bg5} alt="" />
      </div>
      <div className="content5">
         <img src={bg9} alt="" />
      </div>
      <div className="content6">
         <h2>Mini Projects</h2>
         <h4>Projects :</h4>
         <p>Tic-Tac-Toe game,Weather Api,Some static templates</p>
         <h4>Description :</h4>
         <p>
            For the basic understanding of the Web tools,I have developed some static responsive website and Games with React.js
         </p>
      </div>
   </div>
}
export default Project;