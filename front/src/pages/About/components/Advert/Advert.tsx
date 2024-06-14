import { Link } from "react-router-dom";
import styles from "./Advert.module.scss";

export const Advert = () => {
  const advertData = [
    {
      id: "1",
      name: "Eurokim",
      source: "static/img/Eurokim.jpg",
    },
    {
      id: "2",
      name: "Veolia",
      source: "static/img/Veolia.jpg",
      link: "https://www.nadaciavs.sk/",
    },
  ];

  return (
    <article className={styles.container}>
      <h2>Podporovali nás</h2>
      <span className={styles.lineSeparate}></span>
      <p className={styles.text}>
        Ďakujeme za pacientov, ich rodiny aj náš hospic. Vďaka našim partnerom majú možnosť zažiť pocit istoty a
        bezpečia v náročných situáciach, ktoré záver života prináša.
      </p>
      <div className={styles.advContainer}>
        <ul>
          {advertData.map(({ name, link, source, id }) => (
            <li key={id}>
              {link ? (
                <Link to={link} target="_blank" rel="noopener noreferrer">
                  <img src={source} alt={`Logo ${name}`} />
                </Link>
              ) : (
                <img src={source} alt={`Logo ${name}`} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
