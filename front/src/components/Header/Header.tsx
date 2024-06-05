import Logo from "../../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useId, useState } from "react";
import { Modal } from "./components/Modal/Modal";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClick = () => {
    setIsModalActive(!isModalActive);
  };

  const headerData = [
    {
      id: useId(),
      title: "O Nás",
      link: "/",
    },
    {
      id: useId(),
      title: "Čo vám ponúkame",
      items: [
        {
          id: useId(),
          title: "Mobilný hospic",
          link: "/hospital",
        },
        {
          id: useId(),
          title: "Odľahčovacia služba",
          link: "/service",
        },
      ],
    },
    {
      id: useId(),
      title: "Príbehy o dobrej smrti",
      link: "/stories",
    },
    {
      id: useId(),
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
              className={isModalActive ? `${styles.left} ${styles.active}` : styles.left}>
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

                  {headerData.map(({ title, link, id, items }) => (
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
            <div
              className={`${styles.iconModal} ${isModalActive ? styles.active : ""}`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} />
      </header>
      <Link to={""} className={styles.linkCharity}>
        <p>Prosim o podpore nás 2% z daní</p>
      </Link>
    </>
  );
};
