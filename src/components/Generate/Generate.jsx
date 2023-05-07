import React, { useState } from "react";
import styles from "./Generate.module.css";
import { TextField } from "@mui/material";
import QRCode from "react-qr-code";



function Generate() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.generate_container}>
      
      
      <div className={styles.generate_info}>
     <ol>
        <li>First, take your phone</li>
        <li>Write text that you need convert to QR code</li>
        <li>Open camera and point it on your QR code</li>
        <li>If you need to share it, just screenshot your QR and send it to somebody you need</li>
     </ol>
        <TextField
        className={styles.generate_input}
          id="outlined-basic"
          label="Write your text here"
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <QRCode className={styles.generate_code} value={inputValue} />
      </div>
    </div>
  );
}
export default Generate;
