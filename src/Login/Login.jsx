import React from "react";
import styles from "./Login.module.css";
import PeopleIcon from "../images/image.png";
import KakaoLogin from "../images/kakao_login.png"; 

function Login() {
    const REST_API_KEY = 'd67abb59691d4f30320c647af9334ce9';
    const REDIRECT_URI = 'https://klay-ten.vercel.app/api/login/after';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      
    const loginHandler = () => {
      window.location.href = link;
    }

    return (
        <div className={styles.frame}>
            <p className={styles.title1}>Adapt & Play !</p>
            <p className={styles.title2}>KLAY</p>
            <img src={PeopleIcon} className={styles.people_icon} alt="Team icon" />



            <div className={styles.welcome_container}>
                <p className={styles.text1}>Welcome to Klay!</p>
                <p className={styles.text2}>Sign in with Kakao</p>
                <img src={KakaoLogin} className={styles.login_button} alt="Kakao Login" 
                    onClick={loginHandler}
                />
            </div>
        </div>
    );
};

export default Login;