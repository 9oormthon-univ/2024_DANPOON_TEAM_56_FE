import styles from "./SocialFeatures.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

function SocialFeatures ({likes, comments, view}){
    return (
        <div className={styles.frame}>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faHeart}  className={styles.icon} />
                    <p>{likes}</p>
                </div>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faComment}  className={styles.icon} />
                    <p>{comments}</p>
                </div>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faEye}  className={styles.icon} /> 
                    <p>{view}</p> 
                </div>
        </div>
    )
}

export default SocialFeatures;