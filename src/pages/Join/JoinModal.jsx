import React, { useEffect } from "react";
import styles from "./JoinModal.module.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const JoinModal = ({ modalState, setModalState, email }) => {
  useEffect(() => {
    if (modalState === 1) {
      const timeout1 = setTimeout(() => setModalState(0), 2000);
      return () => {
        clearTimeout(timeout1);
      };
    } else if (modalState === 2) {
      const timeout2 = setTimeout(() => {
        setModalState(0);
      }, 2000);
      return () => {
        clearTimeout(timeout2);
      };
    }
  }, [modalState]);
  const renderJoinModal = () => {
    switch (modalState) {
      case 0:
        break;
      case 1:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>인증링크가 전송되었어요!</span>
          </Modal>
        );

      case 2:
        return (
          <Modal
            isOpen={true}
            className={styles.AuthLinkContainer}
            overlayClassName={styles.Overlay}
          >
            <span className={styles.Text}>인증이 아직 안되었어요!</span>
          </Modal>
        );
    }
  };
  return <>{renderJoinModal()}</>;
};

export default JoinModal;
