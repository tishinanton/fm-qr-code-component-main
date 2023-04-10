import React from "react";
import { QrComponent } from "./qr-component/qr-component";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.pageWrapper}>
      <QrComponent></QrComponent>
    </div>
  );
}

export default App;
