import React from 'react';
import styles from './Mission.module.css';
<<<<<<< HEAD
import backGround from '../images/backgroundImg.png';
=======
import { useNavigate } from "react-router-dom";
import backGround from '../images/background.png';
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
import Button1 from '../images/Button1.png';
import Button2 from '../images/Button2.png';
import Button3 from '../images/Button3.png';
import Button4 from '../images/Button4.png';
import Button5 from '../images/Button5.png';
import Button6 from '../images/Button6.png';
import Button7 from '../images/Button7.png';
import Button8 from '../images/Button8.png';

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";


=======
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
function Mission({ clearedMission }) {
    const buttons = [
        { id: 1, src: Button1, style: styles.one },
        { id: 2, src: Button2, style: styles.two },
        { id: 3, src: Button3, style: styles.three },
        { id: 4, src: Button4, style: styles.four },
        { id: 5, src: Button5, style: styles.five },
        { id: 6, src: Button6, style: styles.six },
        { id: 7, src: Button7, style: styles.seven },
        { id: 8, src: Button8, style: styles.eight },
    ];
<<<<<<< HEAD
    const navigate = useNavigate();

=======

    const navigate = useNavigate();
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398

    return (
        <>
            <div
                className={styles.frame}
                style={{
                    backgroundImage: `url(${backGround})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                <div className={styles.ButtonWrapper}>
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            disabled={button.id > clearedMission} // Disable button if not cleared
                            style={{
                                cursor: button.id > clearedMission ? 'not-allowed' : 'pointer',
                            }}
                            onClick={() => navigate('/missionpage')}
                        >
                            <img
                                src={button.src}
                                className={`${styles.commonButton} ${button.style}`}
                                alt={`Button${button.id}`}
                                style={{
                                    filter: button.id > clearedMission ? 'grayscale(100%)' : 'none',
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Mission;
