import { useEffect, useState } from "react";
import styles from "./ProgressSemiCircle.module.css";

const ProgressSemiCircle = ({ percentage }) => {
  const [progressImg, setProgressImg] = useState("");

  // 퍼센트에 따라 다른 상태바 이미지 필요할듯
  useEffect(() => {
    if (percentage < 20) {
      setProgressImg(
        "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg"
      );
    } else if (percentage < 50) {
      setProgressImg(
        "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg"
      );
    } else if (percentage < 80) {
      setProgressImg(
        "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg"
      );
    } else if (percentage < 90) {
      setProgressImg(
        "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg"
      );
    } else {
      setProgressImg(
        "../../assets/ProgressBar/ProgressSemiCircle/progressSemiCircle85.svg"
      );
    }
  }, [percentage]); // `percentage`가 변경될 때만 실행됨

  return (
    <div className={styles.Wrapper}>
      <img src={progressImg} alt={`${percentage}%`} />
      <span className={styles.PercentText}>{percentage}%</span>
    </div>
  );
};

export default ProgressSemiCircle;
