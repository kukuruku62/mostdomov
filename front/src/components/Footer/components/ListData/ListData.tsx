import { IDataList } from "../../../../types/IFooter";
import styles from "./ListData.module.scss";


export const ListData = ({ titleList, subtitleList, items }: IDataList) => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{titleList}</h3>
      <p className={styles.subTitle}>{subtitleList}</p>
      <ul>
        {items.map(({ title, text }, index) => (
          <li key={index} className={styles.item}>
            <p className={styles.text}>{title}</p>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
