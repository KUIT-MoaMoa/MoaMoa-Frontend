import React, { useState } from "react";
import styles from "./NicknameChangeModal.module.css";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const dummyData = [
  {
    id: 1,
    nickname: "모아모아",
  },
  {
    id: 2,
    nickname: "먼지",
  },
  {
    id: 3,
    nickname: "건국대",
  },
];

// 닉네임 변경 모달 컴포넌트
const NicknameChangeModal = ({ userName, dustImg, onClose, setUserName }) => {
  const [newNickname, setNewNickname] = useState(userName);
  const [modalState, setModalState] = useState(1); //modal의 상태를 변경하면서 보이는 부분 다르게 하기
  const checkNickname = () => {
    // 이미 존재하는 닉네임인지 some 사용해서 확인(조건을 만족하는 요소 존재하는지 불리언으로 확인)
    const nicknameExists = dummyData.some(
      (value) => value.nickname === newNickname
    );
    if (nicknameExists) {
      setModalState(4);
    } else {
      setModalState(2);
    }
  };

  const renderModal = () => {
    switch (modalState) {
      case 1:
        return (
          <div
            className={styles.ModalContent}
            // 모달창 내부 클릭 시 모달 닫히지 않게
          >
            <img src={dustImg} alt="먼지" className={styles.ModalDustImg} />
            <input
              className={styles.InputNewNickname}
              type="text"
              placeholder={userName}
              onChange={(e) => setNewNickname(e.target.value)}
            />
            {userName === newNickname ? (
              <div onClick={onClose}>
                <PrimaryButton size="lg">확인</PrimaryButton>
              </div>
            ) : (
              <div onClick={checkNickname}>
                <PrimaryButton size="lg">확인</PrimaryButton>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className={styles.ModalContent}>
            <img
              src={dustImg}
              alt="먼지"
              className={styles.ConfirmModalDustImg}
            />
            <span className={styles.ConfirmNewNickname}>{newNickname}</span>
            <span className={styles.ConfirmText}>
              위와 같이 닉네임이 <br />
              변경됩니다.
            </span>
            <div className={styles.ConfirmButtonContainer}>
              <div
                onClick={() => {
                  setUserName(newNickname);
                  setModalState(3);
                }}
              >
                <PrimaryButton size="sm">네</PrimaryButton>
              </div>
              <div onClick={onClose}>
                <SecondaryButton size="sm">아니요</SecondaryButton>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.ModalContent}>
            <img
              src={dustImg}
              alt="먼지"
              className={styles.ChangedModalDustImg}
            />
            <span className={styles.ConfirmNewNickname}>{newNickname}</span>
            <span className={styles.ConfirmText}>닉네임이 변경되었어요!</span>
            <div onClick={onClose}>
              <PrimaryButton size="lg">확인</PrimaryButton>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.ModalContent}>
            <img
              src={dustImg}
              alt="먼지"
              className={styles.ChangedModalDustImg}
            />
            {/* 확인 버튼 생기면 업데이트 필요 */}
            <div className={styles.disabledNicknameContainer}>
              <span className={styles.disabledNickname}>{newNickname}</span>
            </div>
            <span className={styles.disabledText}>
              아쉽지만 이 닉네임은 사용할 수 없어요😥
            </span>
            <div onClick={onClose}>
              <PrimaryButton size="lg">확인</PrimaryButton>
            </div>
          </div>
        );
    }
  };

  return (
    // 모달창 외부 클릭 시 모달 닫기
    <div className={styles.ModalOverlay}>{renderModal()}</div>
  );
};

export default NicknameChangeModal;
