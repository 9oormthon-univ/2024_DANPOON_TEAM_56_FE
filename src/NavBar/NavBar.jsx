import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function NavBar () {
    const navigate = useNavigate();
    return(
        <>
            <footer className={styles.bottom_navigation}>
<<<<<<< HEAD
                <button className={styles.navButton} onClick={() => navigate('/levels')} ><FontAwesomeIcon icon={faBars} size="lg" style={{color: "#C7D2D8",}} /></button>
                <button className={styles.navButton} onClick={() => navigate('/home')} ><FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#C7D2D8",}} /></button>
                <button className={styles.navButton} onClick={() => navigate('/missionpage')} ><FontAwesomeIcon icon={faUser} size="lg" style={{color: "#C7D2D8",}} /></button>
=======
                <button className={styles.navButton} onClick={() => navigate('/')} ><FontAwesomeIcon icon={faBars} size="lg" style={{color: "#C7D2D8",}} /></button>
                <button className={styles.navButton} onClick={() => navigate('/home')} ><FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#C7D2D8",}} /></button>
                <button className={styles.navButton} onClick={() => navigate('/')} ><FontAwesomeIcon icon={faUser} size="lg" style={{color: "#C7D2D8",}} /></button>
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
            </footer>
        </>
    )
}

export default NavBar;