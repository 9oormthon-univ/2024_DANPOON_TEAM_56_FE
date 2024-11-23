import styles from './UserInfo.module.css';

function UserInfo({src, name, date, taskNum, lv}) {
    return (
        <div className = {styles.frame}>
            <div className = {styles.frameCol}>
                <img src={src} alt="user"/>
                <div className = {styles.userInfo}>
                    <h>{name}</h>
                    <p className={styles.light}>Join Date</p>
                    <p>{date}</p>
                    <p className={styles.light}>Game Process</p>
                    <p>{taskNum} tasks Completed</p>
                </div>
            </div>
            <div className = {styles.frameRow}>
                <p>Lv.{lv}</p>
                <div className = {styles.progressBar}></div>
            </div>

        </div>
    )
}

export default UserInfo;