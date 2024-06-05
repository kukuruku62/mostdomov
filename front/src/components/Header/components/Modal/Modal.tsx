import { Dispatch, PointerEvent, SetStateAction, useEffect, useId, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ isModalActive, setIsModalActive }: ModalProps) => {
  
  const menuData = [
    {
      id: useId(),
      title: "O Nás",
      link: "/",
    },
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

  const handlerClick = (event: PointerEvent<HTMLUListElement>) => {
    if (event.target instanceof HTMLAnchorElement) {
      setIsModalActive(false);
    }
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <nav>
        <ul ref={contentRef} className={styles.modalContent} onClick={handlerClick}>
          {menuData.map(({ id, link, title }) => (
            <li key={id}>
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </dialog>
  );
};
