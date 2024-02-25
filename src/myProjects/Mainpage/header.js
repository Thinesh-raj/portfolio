import "./header.css";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import image1 from "../Images/img-1.png";
function Header() {
    return <div id="head">
        <div id="header">
            <div id="head_part1">
                <h2>NAMMA Shop</h2>
            </div>
            <div id="head_part2">
                <p>Log In</p>
                <FaCartShopping />
                <FaBars />
            </div>
        </div>
        <div id="content">
            <div id="content_part1">
                <h1>50% Discount</h1>
                <h1>Online Shop</h1>
                <p>There are many variations of passages of collections available, but</p>
                <p>the majority have suffered alteration</p>
                <button>Shop Now</button>
            </div>
            <div id="content_part2">
                <img src={image1} />
            </div>
        </div>
        <div id="footer">
            <input placeholder="Search"/>
            <button>Search</button>
        </div>
    </div>
}
export default Header;