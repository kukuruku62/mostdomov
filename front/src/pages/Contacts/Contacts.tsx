import { hospitalData, organizationData, contacts } from "../../Data/Data";
import { ListData } from "../../components/ListData/ListData";
import styles from "./Contacts.module.scss";


export const Contacts = () => {

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titlesContainer}>
            <h2 className={styles.title}>Kontaktujte nás:</h2>
            <p className={styles.text}>
              Radi zodpovieme všetky vaše otázky. Neváhajte sa s nami spojiť.
            </p>
          </div>
          <ul className={styles.contactsContainer}>
            {Object.values(contacts).map((el, index) => 
            <li key={index}>{el}</li>
            )}
          </ul>
          <div className={styles.listsContainer}>
            <ListData {...hospitalData} variant="ligthTheme" />
            <ListData {...organizationData} variant="ligthTheme" />
          </div>
        </div>
      </div>
    </section>
  );
};
