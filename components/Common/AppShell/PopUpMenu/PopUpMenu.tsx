import { IconMenu2 } from "@tabler/icons-react";
import style from "./PopUpMenu.module.css";
import { ActionButton } from "../../ActionButton/ActionButton";

interface PopUpMenuProps {
  onClose?: () => void;
  opened: boolean;
}

export function PopUpMenu({ onClose, opened }: PopUpMenuProps) {
  return (
    <div
      className={`${style.modalWrapper} ${
        opened ? style.wrapperOpen : style.wrapperClose
      }`}
      onClick={onClose}
    >
      <div
        className={`${style.modal} ${
          opened ? style.modalOpen : style.modalClose
        }`}
      >
        <div className={style.modalHeader}>
          <ActionButton onClick={onClose}>
            <IconMenu2 className={style.iconMenu} />
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
