import Logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BurgerButton } from "./components/BurgerButton/BurgerButton";
import { useState } from "react";
import styles from "./Header.module.scss";


export const Header = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const headerData = [
    {
      id: "1",
      title: "O Nás",
      link: "/",
    },
    {
      id: "2",
      title: "Čo vám ponúkame",
      items: [
        {
          id: "2-1",
          title: "Mobilný hospic",
          link: "/hospital",
        },
        {
          id: "2-2",
          title: "Odľahčovacia služba",
          link: "/service",
        },
      ],
    },
    {
      id: "3",
      title: "Príbehy o dobrej smrti",
      link: "/stories",
    },
    {
      id: "4",
      title: "Kontaktujte nás",
      link: "/contacts",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Link
              to={"/"}
              className={isModalActive ? `${styles.left} ${styles.active}` : styles.left}
              aria-label="prejsť na hlavnú stránku"
            >
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={Logo} alt="Logo" />
              </div>
              <div className={styles.titlesContainer}>
                <span className={styles.subtitle}>Mobilný hospic</span>
                <span className={styles.title}>MOST DOMOV</span>
              </div>
            </Link>
            <div className={styles.right}>
              <nav>
                <ul className={styles.listLinks}>
                  {headerData.map(({ id, title, link, items }) => (
                    <li key={id} className={styles.textLink}>
                      {link ? (
                        <NavLink
                          to={link}
                          className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                          <p>{title}</p>
                        </NavLink>
                      ) : (
                        <p className={styles.link}>{title}</p>
                      )}
                      {items && (
                        <ul className={styles.dropdown}>
                          {items.map(({ title, link, id }) => (
                            <li key={id}>
                              <NavLink to={link}>
                                <p>{title}</p>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <BurgerButton isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
          </div>
        </div>
        <Link to={"/donation"} className={styles.linkCharity} aria-label="prejsť na stránku donatov 2% z daní">
          <p>Prosim o podpore nás 2% z daní</p>
        </Link>
      </header>
    </>
  );
};
