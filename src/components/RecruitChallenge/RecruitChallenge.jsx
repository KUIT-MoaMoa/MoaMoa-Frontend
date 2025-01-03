// 모집 중인 챌린지 컴포넌트 구현
import React from "react";
import styles from "./RecruitChallenge.module.css";
import RecruitChallengeCard from "../RecruitChallengeCard/RecruitChallengeCard";

const dummyData = [
  {
    id: 1,
    challengeContent: "1주일에 5만원 쓰기",
    recruitDday: 7,
    currentPeople: 3,
  },
  {
    id: 2,
    challengeContent: "모집 중인 챌린지 만들기",
    recruitDday: 1,
    currentPeople: 2,
  },
  {
    id: 3,
    challengeContent: "예시 데이터",
    recruitDday: 5,
    currentPeople: 7,
  },
];

const RecruitChallenge = () => {
  return (
    <div className={styles.RecruitContainer}>
      <span className={styles.RecruitText}>모집 중인 챌린지</span>
      <div>
        {dummyData.map((item) => (
          // 챌린지 카드도 따로 컴포넌트로 빼서 구현함
          <RecruitChallengeCard
            key={item.id}
            challengeContent={item.challengeContent}
            recruitDday={item.recruitDday}
            currentPeople={item.currentPeople}
          />
        ))}
      </div>
    </div>
  );
};

export default RecruitChallenge;
