import { useParams } from "react-router";
import bg1 from "./Images/WhatsApp Image 2024-02-25 at 18.14.01_2655fa67.jpg";
import bg2 from "./Images/WhatsApp Image 2024-02-25 at 18.14.01_49573cf4.jpg";
import bg3 from "./Images/Screenshot 2024-02-26 235937.png";
import "./Page.scss"
import { Link } from "react-router-dom";
function Page() {
    const page=useParams();
    return <div className="page"> 
        <div><h1>{page.page=="resume"?"Resume":"Certificate"}</h1>
        <Link to="/">Back</Link></div>
        <img src={page.page=="resume"?bg1:bg3}  alt="404" />
        {page.page=="resume"&&<img src={bg2}/>}
    </div>
}
export default Page;