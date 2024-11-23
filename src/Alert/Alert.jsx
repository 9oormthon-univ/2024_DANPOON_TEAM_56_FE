import styles from "./Alert.module.css";

function Alert({img, name, text, time}){
    return (
        <>
        <div className = {styles.social}>
                <img src={img} alt=''/>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>{text}</p>
                <p className={styles.time}>{time}h</p>
        </div>
        </>
    )
}

export default Alert;