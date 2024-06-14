import cn from "classnames";
import { IDataList } from "../../types/Footer";
import styles from "./ListData.module.scss";

interface IListDataProps extends IDataList {
  variant: "ligthTheme" | "darkTheme";
}

export const ListData = ({ titleList, subtitleList, items, variant }: IListDataProps) => {
  return (
    <article className={cn(styles.container, styles[variant])}>
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
