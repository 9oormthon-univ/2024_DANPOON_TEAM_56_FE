import styles from "./MissionPage.module.css";

import MissionTitle from "../MissionTitle/MissionTItle";
import NavBar from "../NavBar/NavBar";
import UploadImage from "../UploadImage/UploadImage";

function MissionPage(){
    return (
        <div className = {styles.frame}>
            <MissionTitle questNum={2}/>
            <UploadImage />
            <NavBar />
        </div>
    )
}

export default MissionPage;