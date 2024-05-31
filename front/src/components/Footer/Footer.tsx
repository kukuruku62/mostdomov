import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { ListData } from "./components/ListData/ListData";
import { IDataList } from "../../types/IFooter";
import styles from "./Footer.module.scss";



export const Footer = () => {

  const hospitalData: IDataList = {
    titleList: "Mobilný hospic Most domov",
    subtitleList: "Sprevádzanie zomierajúcich pacientov a ich rodín.",
    items: [
      { title: "Kód poskytovateľa", text: "P01142630201" },
      { title: "Lekárka", text: "Mudr. Zuzana Hajster Vozárová" },
      { title: "Zdr. sestra", text: "Mgr. Simona Hornáčková, dipl.s." },
      { title: "Adresa", text: "91701 Trnava, Malženická cesta 3" },
    ],
  };

  const organizationData: IDataList = {
    titleList: "Most domov, o.z.",
    subtitleList: "Vzdelávanie, osvetové aktivity, spolupráca, prevádzka.",
    items: [
      { title: "IČO:", text: "54894247" },
      { title: "DIČ:", text: "2122166673" },
      { title: "IBAN", text: "SK 0000 0000 0000 0000" },
      { title: "Adresa:", text: "84105 Bratislava, Veternicová 3116/22" },
    ],
  };

  const contacts = {
    phone: "0918666685",
    email: "info@mostdomov.sk",
    openHours: "PO – PI: 8:00 – 16:00",
  } as const;

  return (
    <footer className={styles.footer}>
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
          <ListData {...hospitalData} />
          <ListData {...organizationData} />
        </div>
      </div>
    </footer>
  );
};
