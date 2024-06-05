import { useId } from "react";
import { Link } from "react-router-dom";
import styles from "./Advert.module.scss";

export const Advert = () => {
  const advertData = [
    {
      id: useId(),
      name: "Eurokim",
      source: "/static/images/Eurokim.jpg",
    },
    {
      id: useId(),
      name: "Veolia",
      source: "/static/images/Veolia.jpg",
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
