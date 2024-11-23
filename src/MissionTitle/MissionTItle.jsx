import styles from "./MissionTitle.module.css";

function MissionTitle () {
    return (
        <div className={styles.frame}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className = {styles.flipCardFront}>
                        <p className = {styles.whiteText}>Quest 2</p>
                        <p>2024.11.24</p>
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