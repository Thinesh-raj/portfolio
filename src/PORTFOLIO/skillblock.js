import { FaStar } from "react-icons/fa6";
import "./skillblock.css"
function Skillblock(p) {
    let star = [];
    let rate = Math.floor(p.star);
        for (let i = 1; i <= p.star; i++) {
            star.push(< FaStar className="icon" />)
        }
    
    return <div className="skillblock">
        <div className="hide">{p.icon}</div>
        <div className="show">
            <h2>{p.skill}</h2>
            <div className="star">{star}
            <div className="overstar"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div></div>
            <p>{p.Note}</p>
        </div>
    </div>
}
export default Skillblock;