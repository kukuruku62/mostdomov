import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { ListData } from "../ListData/ListData";
import { hospitalData, organizationData, contacts } from "../../Data/Data";
import styles from "./Footer.module.scss";


export const Footer = () => {


  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <ul className={styles.contactsList}>
            <li className={styles.contact}>
              <MdOutlinePhoneInTalk className={styles.icon} />
              <p className={styles.phone}>{contacts.phone}</p>
            </li>
            <li className={styles.contact}>
              <MdOutlineMailOutline className={styles.icon} />
              <Link to="mailto:info@mostdomov.sk" target="_blank" rel="noopener noreferrer">
                <p className={styles.email}>{contacts.email}</p>
              </Link>
            </li>
            <li className={styles.contact}>
              <GoClock className={styles.icon} />
              <p className={styles.hours}>{contacts.openHours}</p>
            </li>
          </ul>
          <ListData {...hospitalData} variant="darkTheme" />
          <ListData {...organizationData} variant="darkTheme" />
        </div>
      </div>
    </footer>
  );
};
