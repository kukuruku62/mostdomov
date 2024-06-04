import { serviseData } from "../../Data/Data";
import styles from "./ServicePage.module.scss";

export const ServicePage = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Odľahčovacia služba "Most domov"</h2>
          <p className={styles.text}>
            Poslaním terénnej odľahčovacej služby je zastúpiť starajúcu sa osobu v každodenných
            úkonoch a umožniť jej odpočinok a priestor na vybavenie osobných záležitostí. Ponúkame
            ľuďom odkázaným na pomoc a starostlivosť druhej osoby možnosť zostať v prostredí, na
            ktoré sú navyknutí. V rámci odľahčovacej služby je zabezpečená odborná starostlivosť
            zdravotnou sestrou.
          </p>
          {serviseData.map(({ title, items }) => (
            <div className={styles.item}>
              <h3>{title}</h3>
              {items.map((el) => (
                <ul>
                  <li>{el}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
