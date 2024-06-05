import styles from "./Goal.module.scss";

export const Goal = () => {
  return (
    <article className={styles.container}>
      <h2>Cieľ</h2>
      <span className={styles.lineSeparate}></span>
      <p className={styles.text}>
        Našou víziou je premieňať umieranie na príbehy o dobrej smrti. Aby odchádzanie z tohto sveta
        bolo v čo najväčšom prijatí a láske. Našim poslaním je sprevádzanie a podpora zomierajúcich
        pacientov, ktorí sa túžia lúčiť v bezpečí domova, obklopení svojimi blízkymi. Vytvoriť im
        pocit istoty a bezpečia v závere života, na ich poslednej spoločnej ceste. Našim cieľom je
        budovať Most domov. Most, vďaka ktorému sa pacienti z prostredia zdravotníckeho zariadenia
        dostanú do náručia svojej rodiny. Most, cez ktorý prejdú zo života do smrti vo väčšej
        blízkosti, podpore a láskavosti.
      </p>
      <p className={styles.highlightBlack}>
        ,,Smerujeme, či vraciame sa, k niečomu väčšiemu.” Bronnie Wareová
      </p>
    </article>
  );
};