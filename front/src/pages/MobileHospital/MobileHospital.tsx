import { mobileHospitalData } from "../../Data/Data";
import styles from "./MobileHospital.module.scss";

export const MobileHospital = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Mobilný hospic "Most domov"</h2>
          {mobileHospitalData.map(({ title, items, detailTitle, detailText }, index) => (
            <div key={index} className={styles.item}>
              <h3>{title}</h3>
              {items.map((el, index) => (
                <ul key={index}>
                  <li>{el}</li>
                </ul>
              ))}
              {detailTitle && <p className={styles.detail}>{detailTitle}</p>}
              {detailText && <p className={styles.detail}>{detailText}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
