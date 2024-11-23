import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { RiKakaoTalkFill } from "react-icons/ri";
import PeopleIcon from "../images/image.png"; 
=======
import PeopleIcon from "../images/image.png";
import KakaoLogin from "../images/kakao_login.png"; 
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398

function Login() {
    const navigate = useNavigate();

    return (
        <div className={styles.frame}>
            <p className={styles.title1}>Adapt & Play !</p>
            <p className={styles.title2}>KLAY</p>
            <img src={PeopleIcon} className={styles.people_icon} alt="Team icon" />


<<<<<<< HEAD

            <div className={styles.welcome_container}>
                <p className={styles.text1}>Welcome to Klay!</p>
                <p className={styles.text2}>Sign in with Kakao</p>
                <button className={styles.login_button} onClick={() => navigate("/home")}>
                    <RiKakaoTalkFill /> 
                    <p> 카카오 로그인</p>
                </button>
=======
            <div className={styles.welcome_container}>
                <p className={styles.text1}>Welcome to Klay!</p>
                <p className={styles.text2}>Sign in with Kakao</p>
                <img src={KakaoLogin} className={styles.kakao_login} 
                alt="Kakao Login" onClick={() => navigate('/home')} />
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
            </div>
        </div>
    );
};

export default Login;