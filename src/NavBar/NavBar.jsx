import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function NavBar () {
    const navigate = useNavigate();
    return(
        <>
            <footer className={styles.bottom_navigation}>
                <button className={styles.navButton} onClick={() => navigate('/levels')} ><FontAwesomeIcon icon={faBars} size="lg" className={styles.icon} /></button>
                <button className={styles.navButton} onClick={() => navigate('/home')} ><FontAwesomeIcon icon={faHouse} size="lg" className={styles.icon} /></button>
                <button className={styles.navButton} onClick={() => navigate('/missionpage')} ><FontAwesomeIcon icon={faUser} size="lg" className={styles.icon} /></button>
            </footer>
        </>
    )
}

export default NavBar;