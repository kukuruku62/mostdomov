import { Gallery } from "./components/Gallery/Gallery";
import { Goal } from "./components/Goal/Goal";
import { Advert } from "./components/Advert/Advert";
import styles from "./About.module.scss";


export const About = () => {
  return (
    <section>
      <div className={styles.container}>
        <article className={styles.topContent}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <span className={styles.highlightGreen}>Našou víziou je</span> premieňať umieranie na
              príbehy o dobrej smrti. Aby odchádzanie z tohto sveta bolo
              <span className={styles.highlightGreen}>v čo najväčšom prijatí a láske.</span>
            </h1>
          </div>
          <div className={styles.right}></div>
        </article>
        <div className={styles.lowerContent}>
          <Goal />
          <Gallery />
          <Advert />
        </div>
      </div>
    </section>
  );
};
