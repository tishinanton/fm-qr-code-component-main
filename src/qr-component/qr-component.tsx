import React from "react";
import styles from "./qr-component.module.css";
import qr from "./qr.png";

export const QrComponent = () => {
  return (
    <div className={styles.qrWrapper}>
      <div className={styles.qr}>
        <img src={qr} alt="" />
      </div>
      <h1 className={styles.header}>
        Improve your front-end skills by building projects
      </h1>
      <p className={styles.hint}>
        Scan the QR code to visit Frontend
        <br /> Mentor and take your coding skills to <br />
        the next level
      </p>
    </div>
  );
};
