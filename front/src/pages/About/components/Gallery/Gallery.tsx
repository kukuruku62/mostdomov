import { useId } from "react";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const data = [
    {
      id: useId(),
      url: "/static/images/1.webp",
      name: "Mudr. Zuzana Hajster Vozárová",
      profession: "Odborná garantka, lekárka",
      email: "hajstervozarova@mostdomov.com",
    },
    {
      id: useId(),
      url: "/static/images/2.webp",
      name: "Mgr. Simona Hornačková, dipl.s.",
      profession: "Zdravotná sestra",
      email: "simona.hornackova@mostdomov.com",
    },

    {
      id: useId(),
      url: "/static/images/3.webp",
      name: "Katarína Habláková",
      profession: "Prevádzková riaditeľka",
      email: "katarina.hablakova@mostdomov.sk",
    },
  ];

  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Tím</h2>
      <span className={styles.lineSeparate}></span>
      <ul>
        {data.map(({ url, name, profession, email, id }) => (
          <li key={id}>
            <img src={url} alt={`Fotografia ${name}`} />
            <p className={styles.name}>{name}</p>
            <p className={styles.profession}>{profession}</p>
            <a className={styles.email}>{email}</a>
          </li>
        ))}
      </ul>
    </article>
  );
};
