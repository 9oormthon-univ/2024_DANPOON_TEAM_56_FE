import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "../images/image.png";
import KakaoLogin from "../images/kakao_login.png"; 

function Login() {
    const navigate = useNavigate();

    return (
        <div className={styles.frame}>
            <p className={styles.title1}>Adapt & Play !</p>
            <p className={styles.title2}>KLAY</p>
            <img src={PeopleIcon} className={styles.people_icon} alt="Team icon" />



            <div className={styles.welcome_container}>
                <p className={styles.text1}>Welcome to Klay!</p>
                <p className={styles.text2}>Sign in with Kakao</p>
                <img src={KakaoLogin} className={styles.login_button} alt="Kakao Login" 
                    onClick={() => navigate("/home")}
                />
            </div>
        </div>
    );
};

export default Login;