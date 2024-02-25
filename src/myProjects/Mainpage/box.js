import "./box.css";
function Box(p) {
    return <div id="box">
        <h3>{p.topic}</h3>
        <div><img src={p.img} alt="404" /></div>
        <p>SEE MORE</p>
    </div>
}
export default Box;