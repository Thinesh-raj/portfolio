import icon1 from "../Images/icon-1.png";
import icon2 from "../Images/icon-2.png";
import icon4 from "../Images/icon-3.png";
import icon3 from "../Images/icon-4.png";
import bg1 from "../Images/img-2.png";
import bg2 from "../Images/img-3.png";
import bg3 from "../Images/img-4.png";
import bg4 from "../Images/img-5.png";
import bg5 from "../Images/img-6.png";
import bg6 from "../Images/img-7.jpeg";
import Box from "./box";
import "./content.css";
function Content() {
    let boxData = [{
        topic: "UP TO 50% OFF | BEDS",
        image: bg1
    },
    {
        topic: "ORGANIZED IN STYLE",
        image: bg2
    },
    {
        topic: "REFURBISHED MIXER",
        image: bg3
    },
    {
        topic: "BEAUTY PRODUCTS",
        image: bg4
    },
    {
        topic: "EXPLORE TRENDING ELECTRONICS",
        image: bg5
    },
    {
        topic: "MOBILE PHONES",
        image: bg6
    }]
    return <>
        <div id="bar">
            <span>Categories</span>
            <div>
                <img src={icon1} alt="404" />
                <p>New Fashion</p>
            </div>
            <div>
                <img src={icon2} alt="404" />
                <p>Clothing</p>
            </div> <div>
                <img src={icon3} alt="404" />
                <p>Accessories</p>
            </div>
            <div>
                <img src={icon4} alt="404" />
                <p>Sweaters & Jackets</p>
            </div>
        </div >
        <div id="container">
           {
            boxData.map(e=>{
                return <Box topic={e.topic} img={e.image} />
            })
           }
        </div>
    </>
}
export default Content;