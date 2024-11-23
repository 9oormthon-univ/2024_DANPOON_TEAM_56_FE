// import styles from './MissionRoadMap.module.css';
import Mission from '../Mission/Mission';
import Status from '../Status/Status';
import NavBar from '../NavBar/NavBar';


function MissionRoadMap () {
    return (
        <>  
            <Status UserName="John" Participation="3" MissionNum="2" clearLv="7" />
            <Mission clearedMission = {3} />
            <NavBar />        
        </>
    )
}

export default MissionRoadMap;