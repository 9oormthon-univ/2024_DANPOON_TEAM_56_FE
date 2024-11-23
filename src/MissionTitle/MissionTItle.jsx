import styles from "./MissionTitle.module.css";

<<<<<<< HEAD
function MissionTitle ({questNum}) {

    const today = new Date();
    const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
=======
function MissionTitle () {
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
    return (
        <div className={styles.frame}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className = {styles.flipCardFront}>
<<<<<<< HEAD
                        <p className = {styles.title}>Quest <span>{questNum}</span></p>
                        <p className = {styles.date}>{date}</p>
=======
                        <p className = {styles.whiteText}>Quest 2</p>
                        <p>2024.11.24</p>
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
                        <div className={styles.missionTitle}>
                            <p>Go to a Cafe !</p>
                        </div>
                    </div>
                    <div className = {styles.flipCardBack}>
                        <p>Go to a Cafe, </p>
                        <p>order a beverage,</p>
                        <p>and upload a photo as proof.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionTitle;