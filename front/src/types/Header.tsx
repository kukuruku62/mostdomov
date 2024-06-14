import { Dispatch, SetStateAction } from "react";

export interface IModalProps {
  isModalActive: boolean, 
  setIsModalActive: Dispatch<SetStateAction<boolean>>
}