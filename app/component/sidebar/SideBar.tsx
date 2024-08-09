"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faCalendar,
  faDonate,
  faClipboardList,
  faFileAlt,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css"; // Importing CSS module for styling
import { Close, Menu } from "@mui/icons-material";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isVisible ? <Close /> : <Menu />}
      </button>
      <div className={`${styles.sidebar} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faFaceSmile} />
            <span>Face Recognition</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Daily Visit</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faDonate} />
            <span>Donate</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Work Orders</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Reports</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faHistory} />
            <span>Report History</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faHistory} />
            <span>Test History</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
