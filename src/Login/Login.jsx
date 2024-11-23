import React, { useEffect } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PeopleIcon from "../images/image.png";
import KakaoLogin from "../images/kakao_login.png"; 

function Login() {
    const navigate = useNavigate();
    const REST_API_KEY = 'd67abb59691d4f30320c647af9334ce9';
    const REDIRECT_URI = 'https://klay-ten.vercel.app/api/login/after';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
      
    const loginHandler = () => {
      window.location.href = link;
    }

    const getToken = async () => {
        const token = new URL(window.location.href).searchParams.get("code");
        const res = axios.post(
          "https://kauth.kakao.com/oauth/token",
          {
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: token,
          },
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        return res;
    }

    useEffect(() => {
        getToken()
          .then((res) => {
            if (res) {
              localStorage.setItem("token", JSON.stringify(res.data.access_token));
              navigate("/home");
            }
          })
          .catch((err) => console.log(err));
      }, []);

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