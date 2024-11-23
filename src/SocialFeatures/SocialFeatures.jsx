import styles from "./SocialFeatures.module.css";
import Alert from "../Alert/Alert";

import UserIcon from "../images/UserIcon.png";

function SocialFeatures() {
    // Mock data array
    const mockdata = [
        { img: UserIcon, name: "Henry88", text: "commented on your post", time: 2 },
        { img: UserIcon, name: "Clala127", text: "liked your post", time: 5 },
        { img: UserIcon, name: "User123", text: "commented on your post", time: 10 },
        { img: UserIcon, name: "ExtraUser", text: "shared your post", time: 15 },
    ];

    return (
        <div className={styles.frame}>
            {mockdata.slice(0, 3).map((item, index) => ( // slice to limit to 3 items
                <Alert
                    key={index} 
                    img={item.img}
                    name={item.name}
                    text={item.text}
                    time={item.time}
                />
            ))}
        </div>
    );
}

export default SocialFeatures;
