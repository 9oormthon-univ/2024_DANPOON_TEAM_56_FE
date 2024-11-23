import React, { useEffect } from "react";
import axios from "axios";

function Cookie() {
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.post("/api/cookie");
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error sending request:", error);
      }
    };

    sendRequest();
  }, []);

  return <></>; 
}

export default Cookie;
