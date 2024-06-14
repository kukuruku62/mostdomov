import { MouseEvent, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IModalProps } from "../../types/Header";
import styles from "./Modal.module.scss";

export const Modal = ({ isModalActive, setIsModalActive }: IModalProps) => {

  const menuData = [
    {
      id: "1",
      title: "O Nás",
      link: "/",
    },
    {
      id: "2",
      title: "Mobilný hospic",
      link: "/hospital",
    },
    {
      id: "3",
      title: "Odľahčovacia služba",
      link: "/service",
    },
    {
      id: "4",
      title: "Príbehy o dobrej smrti",
      link: "/stories",
    },
    {
      id: "5",
      title: "Kontaktujte nás",
      link: "/contacts",
    },
  ];

  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isModalActive) {
      dialogRef.current?.show();
      document.body.classList.add(`${styles.lock}`);
    }

    if (!isModalActive) {
      dialogRef.current?.close();
      document.body.classList.remove(`${styles.lock}`);
    }
  }, [isModalActive]);

  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    if (event.target instanceof HTMLAnchorElement) {
      setIsModalActive(false);
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <nav>
        <ul ref={contentRef} className={styles.modalContent} onClick={handleClick}>
          {menuData.map(({ id, link, title }) => (
            <li key={id}>
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </dialog>
  );
};
