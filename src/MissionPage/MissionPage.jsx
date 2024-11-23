import styles from "./MissionPage.module.css";

import MissionTitle from "../MissionTitle/MissionTItle";
import NavBar from "../NavBar/NavBar";
import UploadImage from "../UploadImage/UploadImage";

function MissionPage(){
    return (
        <div className = {styles.frame}>
<<<<<<< HEAD
            <MissionTitle questNum={2}/>
=======
            <MissionTitle />
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
            <UploadImage />
            <NavBar />
        </div>
    )
}

export default MissionPage;