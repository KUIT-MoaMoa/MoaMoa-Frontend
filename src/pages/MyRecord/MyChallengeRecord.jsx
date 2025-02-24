import React from "react";
import styles from "./MyChallengeRecord.module.css";
import coinNavy from "../../assets/Content/coinNavy.svg";
import graySuccess from "../../assets/ChallengeResult/graySuccess.svg";
import grayFail from "../../assets/ChallengeResult/grayFail.svg";
import dateBlue from "../../assets/Content/dateBlue.svg";

const MyChallengeRecord = ({ item, isConsData }) => {
  let startDate = new Date(item.startDate);
  startDate = `${String(startDate.getFullYear()).slice(-2)}.${
    startDate.getMonth() + 1
  }.${startDate.getDate()}`;
  let endDate = new Date(item.endDate);
  endDate = `${String(endDate.getFullYear()).slice(-2)}.${
    endDate.getMonth() + 1
  }.${endDate.getDate()}`;
  return (
    <div className={item.succeed ? styles.successWrapper : styles.failWrapper}>
      <img src={item.succeed ? graySuccess : grayFail} />
      <div className={styles.rightWrapper}>
        <p>{item.title}</p>
        {isConsData && (
          <p className={styles.consData}>
            <span className={styles.cons}>사용 {item.totalSpent}</span>
            <span className={styles.target}> / 목표 {item.targetAmount}</span>
          </p>
        )}
        <div className={styles.challengeInfo}>
          <span className={styles.date}>
            <img src={dateBlue} alt="달력 모양 아이콘" />
            {startDate}~{endDate}
          </span>
          <span className={styles.coin}>
            <img src={coinNavy} alt="챌린지 코인 아이콘" />
            {item.succeed ? "+" : "-"}
            {isConsData ? item.prize : item.transaction}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyChallengeRecord;
