import styles from "./MissionTitle.module.css";

function MissionTitle ({questNum}) {

    const today = new Date();
    const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
    return (
        <div className={styles.frame}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className = {styles.flipCardFront}>
                        <p className = {styles.title}>Mission <span>{questNum}</span></p>
                        <p className = {styles.date}>{date}</p>
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