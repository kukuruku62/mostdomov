import { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../../../Modal/Modal";
import { IModalProps } from "../../../../types/Header";
import styles from "./BurgerButton.module.scss";

export const BurgerButton = ({ isModalActive, setIsModalActive }: IModalProps) => {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <button
        className={`${styles.buttonModal} ${isModalActive ? styles.active : ""}`}
        onClick={handleClick}
        aria-label={!isModalActive ? "kliknutím otvoríte menu" : "kliknutím zatvoríte menu"}
        aria-expanded={!isModalActive}
        aria-haspopup="menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {createPortal(
        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} />,
        document.getElementById("modal-menu")!
      )}
    </>
  );
};
