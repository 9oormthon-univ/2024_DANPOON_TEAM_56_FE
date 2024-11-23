import styles from "./MissionPage.module.css";

import MissionTitle from "../MissionTitle/MissionTItle";
import NavBar from "../NavBar/NavBar";
import UploadImage from "../UploadImage/UploadImage";
import MockMission from "../MockMission/MockMission";
import img1 from "../images/coffee1.png";
import img2 from "../images/coffee2.png";
import img3 from "../images/coffee3.png";


function MissionPage(){
    return (
        <div className = {styles.frame}>
        <div className = {styles.innerframe1}>
            <MissionTitle questNum={2}/>
        </div>
        <div className = {styles.innerframe2}>
            <UploadImage />
        </div>
        <div className = {styles.innerframe2}>
            <MockMission src={img1}/>
        </div>  
        <div className = {styles.innerframe2}>
            <MockMission src={img2}/>
        </div> 
        <div className = {styles.innerframe2}>
            <MockMission src={img3}/>
        </div>         
            <NavBar />
        </div>
    )
}

export default MissionPage;