import { FaBuildingColumns, FaSchool, FaGraduationCap } from "react-icons/fa6"
function Education() {
    return <div className="education">
        <h1>Education</h1>
        <div className="large">
            <div>
                <p>Rani Meyyammai Matriculation School Puliyur</p>
                <p>Secondary School Leaving Certificate</p>
                <p>Marks-92%</p>
            </div>
            <div className="icon"><FaBuildingColumns className="i i-top" />
                <p>2018-2019</p></div>
            <div>
                <p>Anna University Regional Campus Coimbatore</p>
                <p>  B. E-Electrical and Electronics Engineering</p>
                <p>CGPA-8. 27</p></div>
            <div className="time">
                <span className="dot1"></span>
                <span className="dot2"></span>
                <span className="dot3"></span>
            </div>
            <div className="icon">
                <p>2017-2018</p>
                <FaSchool className="i" />
            </div>
            <div>
                <p>Bharani Park Matric Higher Secondary School</p>
                <p>Higher Secondary Certificate</p>
                <p> Marks-79%</p></div>
            <div className="icon">
                <p>2019-2023</p>
                <FaGraduationCap className="i" /></div>
        </div>



        <div className="small">
            <div className="icon">
                <FaSchool className="i" />
                <p>2017-2018</p>
            </div>
            <div>
                <p>Rani Meyyammai Matriculation School Puliyur</p>
                <p>Secondary School Leaving Certificate</p>
                <p>Marks-92%</p>
            </div>
            <div className="icon"><FaBuildingColumns className="i i-top" />
                <p>2018-2019</p></div>
                <div>
                <p>Bharani Park Matric Higher Secondary School</p>
                <p>Higher Secondary Certificate</p>
                <p> Marks-79%</p></div>
            <div className="icon">
                <FaGraduationCap className="i" />
                <p>2019-2023</p></div>
            <div>
                <p>Anna University Regional Campus Coimbatore</p>
                <p>  B. E-Electrical and Electronics Engineering</p>
                <p>CGPA-8. 27</p></div>
        </div>
    </div>
}
export default Education;