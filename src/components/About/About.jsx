import React, { useState } from "react";
import styles from "./About.module.css";
import Button from "@mui/material-next/Button";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

function About() {




  return (
    <div className={styles.about_container}>
      <div className={styles.about_wrapper}>
        <div className={styles.about_info}>
          <div className={styles.about_text}>
            <h1> Free online QR code generator</h1>
            <p>
              Connect with your audience, raise your profile, improve the
              customer experience and increase engagement by adding QR codes to
              all your collateral and campaigns. For a quick and easy way to get
              people to your website, social media accounts, and other online
              resources, use the Express QR code generator.
            </p>
            <Link to="/GenerateQR">
            <Button
              className={styles.about_button}
              color="primary"
              disabled={false}
              size="large"
              variant="filled"
            >
              {" "}
              Generate your QR now{" "}
            </Button>
            </Link>
          </div>
          <div className={styles.image_wrapper}>
            <img
              className={styles.image}
              src="https://www.adobe.com/express/feature/image/media_13c362c345413a83bd3f502ac755647b7fb48a45f.png?width=2000&format=webply&optimize=medium"
            ></img>
          </div>
        </div>
        <div className={styles.main_container}>
          <div className={styles.main_wrapper}>
            <div className={styles.main_info}>
              <div className={styles.main_info_text}>
                <h2>Get started on your QR code in seconds.</h2>
                <p>
                  Make your custom QR code in a few taps. All you need is your
                  mobile device or computer and browser; you don't have to
                  download special software or apps to use this QR
                  generator. Its easy to use, so try it out now
                </p>
                <Link to="/GenerateQR">
                <Button
              className={styles.main_button}
              color="primary"
              disabled={false}
              size="small"
              variant="filled"
            >
              {" "}
              Generate your QR now{" "}
            </Button>
                </Link>
                
              </div>
              <div className={styles.main_image_wrapper}>
                <img className={styles.main_info_image} src="https://www.adobe.com/express/feature/image/media_18ea8d3382188c315bddd5f5d3e44c8b779e97d35.png?width=2000&format=webply&optimize=medium" alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
export default About;
