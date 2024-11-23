import React from 'react';
import styles from './Mission.module.css';
import backGround from '../images/backgroundImg.png';
import Button1 from '../images/Button1.png';
import Button2 from '../images/Button2.png';
import Button3 from '../images/Button3.png';
import Button4 from '../images/Button4.png';
import Button5 from '../images/Button5.png';
import Button6 from '../images/Button6.png';
import Button7 from '../images/Button7.png';
import Button8 from '../images/Button8.png';
import Button9 from '../images/Button9.png';

import { useNavigate } from "react-router-dom";


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
        { id: 9, src: Button9, style: styles.nine },
    ];
    const navigate = useNavigate();


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
