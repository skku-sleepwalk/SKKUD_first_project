import { IconExclamationCircle, IconX } from "@tabler/icons-react";
import style from "./LoginErrorModal.module.css";
import { UnstylesButton } from "@/components/Common/UnstyledButton/UnstyledButton";

interface LoginErrorModalProps {
  CloseModal?: () => void;
  content: string;
}

export function LoginErrorModal({ CloseModal, content }: LoginErrorModalProps) {
  return (
    <div className={style.modal}>
      <div className={style.modalContainer}>
        <div className={style.modalWrapper}>
          <div className={style.modalTopSection}>
            <div className={style.modalTitle}>
              <IconExclamationCircle color="red" stroke={1.5} />
              <div>알림</div>
            </div>
            <UnstylesButton onClick={CloseModal}>
              <IconX stroke={1.2} size={"1.2rem"} color="gray" />
            </UnstylesButton>
          </div>
          <div className={style.modalContent}>{content}</div>
        </div>
      </div>
    </div>
  );
}
