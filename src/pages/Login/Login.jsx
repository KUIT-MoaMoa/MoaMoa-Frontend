import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";
import visible from "../../assets/Content/visible.svg";
import emailOK from "../../assets/Content/emailOK.svg";
import emailCheck from "../../assets/Content/emailCheck.svg";
import dustSunglassCoin from "../../assets/CharacterImgs/dustSunglassCoin.svg";
import PwChangeModal from "./PwChangeModal";

// 닉네임 받아오기
const nickname = "모아모아짱";

// setState는 비동기적으로 동작하므로 즉시 반영하려면 이벤트값을 바로 이용해야함.

const Login = () => {
  // 서버에 결과 요청 후 맞으면 isCorrect가 true가 되게. 로그인 정보가 맞는지.
  const [isCorrect, setIsCorrect] = useState(true);

  const navigate = useNavigate();

  const [loginStep, setLoginStep] = useState(0);
  // 이메일 상태
  const [email, setEmail] = useState("");
  // 인증코드 전송 모달 상태. modalState가 2일 때는 인증이 완료된 상태임.
  const [modalState, setModalState] = useState(0);

  const [inputPw, setInputPw] = useState("");
  const [visiblePw, setVisiblePw] = useState(false);

  // 새로운 비밀번호와 재확인
  const [newPw, setNewPw] = useState("");
  const [newPwCheck, setNewPwCheck] = useState("");

  // 로그인 한 뒤 2초 후 홈화면으로 가기
  useEffect(() => {
    if (loginStep === 4) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginStep]);

  const renderLogin = () => {
    switch (loginStep) {
      case 0:
        return (
          <>
            <div className={styles.WelcomeTextContainer}>
              <span className={styles.WelcomeText}>반가워요!</span>
              <span className={styles.NormalText}>
                가입한 이메일 주소와 비밀번호를 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "79px" }}>
              <span className={styles.InputTitle}>이메일 주소</span>
              <input
                className={styles.InputContainer}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abcd1234@example.com"
              />
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "20px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src={visible}
                alt="비밀번호 보이기"
              />
              {visiblePw ? (
                <input
                  className={styles.InputContainer}
                  type="text"
                  onChange={(e) => setInputPw(e.target.value)}
                />
              ) : (
                <input
                  className={styles.InputContainer}
                  type="password"
                  onChange={(e) => setInputPw(e.target.value)}
                />
              )}
            </div>
            <div className={styles.LinkTextContainer}>
              <span
                className={styles.ToJoinPage}
                onClick={() => navigate("/join")}
                style={{ marginBottom: "20px" }}
              >
                회원가입 하기
              </span>
              <span className={styles.NormalText}>비밀번호를 잊으셨나요?</span>
              <span className={styles.ToFindPw} onClick={() => setLoginStep(1)}>
                비밀번호 찾기
              </span>
            </div>

            <div
              className={styles.ButtonContainer}
              onClick={() => {
                if (isCorrect) {
                  setLoginStep(4), console.log(nickname, inputPw);
                }
              }}
            >
              <PrimaryButton>다음</PrimaryButton>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span
                className={styles.LoginProcessText}
                style={{ marginTop: "50px" }}
              >
                비밀번호 찾기
              </span>
              <span
                className={styles.NormalText}
                style={{ fontWeight: "500px" }}
              >
                가입 시 사용한
                <br />
                이메일을 입력해주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "60px" }}>
              <div className={styles.EmailInputContainer}>
                <span
                  className={styles.InputTitle}
                  style={{ marginTop: "18px" }}
                >
                  이메일 주소
                </span>
                {modalState === 2 ? (
                  <img
                    className={styles.EmailCheckImg}
                    src={emailOK}
                    alt="이메일 확인"
                  />
                ) : (
                  <img
                    className={styles.EmailCheckImg}
                    src={emailCheck}
                    alt="이메일 확인"
                  />
                )}
                <input
                  value={email}
                  className={styles.InputContainer}
                  type="text"
                  onChange={(e) => {
                    const inputEmail = e.target.value;
                    setEmail(inputEmail);
                  }}
                  style={{ color: "#2b2b2b" }}
                  placeholder="abcd1234@example.com"
                />
              </div>
            </div>
            <div
              className={styles.ButtonContainer}
              onClick={() => setModalState(1)}
              style={{
                pointerEvents: !email ? "none" : "auto",
              }}
            >
              <PrimaryButton disabled={!email}>인증코드 받기</PrimaryButton>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 재설정</span>
              <span
                className={styles.NormalText}
                style={{ fontWeight: "500px" }}
              >
                새로운 비밀번호를 입력해 주세요
              </span>
            </div>
            <div className={styles.InputWrapper} style={{ marginTop: "78px" }}>
              <span className={styles.InputTitle}>비밀번호</span>
              <img
                className={styles.VisiblePw}
                onClick={() => setVisiblePw(!visiblePw)}
                src={visible}
                alt="비밀번호 보이기"
              />
              {visiblePw ? (
                <input
                  className={styles.InputContainer}
                  type="text"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  style={{ color: "#2b2b2b" }}
                />
              ) : (
                <input
                  className={styles.InputContainer}
                  type="password"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  style={{ color: "#2b2b2b" }}
                />
              )}
              <span className={styles.InputTitle} style={{ marginTop: "12px" }}>
                비밀번호 재확인
              </span>
              <input
                className={styles.InputContainer}
                type="password"
                value={newPwCheck}
                onChange={(e) => setNewPwCheck(e.target.value)}
                style={{ color: "#2b2b2b" }}
              />
              {newPw && newPw !== newPwCheck ? (
                <span
                  className={styles.InputTitle}
                  style={{ color: "#FF5B5B" }}
                >
                  일치하지 않는 비밀번호에요
                </span>
              ) : (
                <></>
              )}
            </div>

            <div
              className={styles.ButtonContainer}
              onClick={() => {
                setLoginStep(3);
              }}
              style={{
                pointerEvents: newPw && newPw === newPwCheck ? "auto" : "none",
              }}
            >
              <PrimaryButton disabled={!(newPw && newPw === newPwCheck)}>
                변경하기
              </PrimaryButton>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>비밀번호 변경!</span>
              <span
                className={styles.WelcomeUserText}
                style={{ fontSize: "22px", fontWeight: "700" }}
              >
                비밀번호 변경이 완료되었어요!
              </span>
            </div>
            <img
              src={dustSunglassCoin}
              alt="환영하는 먼지"
              style={{ width: "222px", height: "198px", marginTop: "101px" }}
            />
            <div
              className={styles.ButtonContainer}
              onClick={() => {
                console.log(
                  "닉네임 : ",
                  nickname,
                  ", 이메일 : ",
                  email,
                  ", 비밀번호 : ",
                  newPw
                );
                setLoginStep(4);
              }}
            >
              <PrimaryButton>로그인하기</PrimaryButton>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.LoginProcessTextContainer}>
              <span className={styles.LoginProcessText}>로그인 완료!</span>
              <span className={styles.WelcomeUserText}>
                <span style={{ color: "#454545", fontSize: "22px" }}>
                  {nickname}
                </span>{" "}
                님 환영해요!
              </span>
            </div>
            <img
              src={dustSunglassCoin}
              alt="환영하는 먼지"
              style={{ width: "222px", height: "198px", marginTop: "101px" }}
            />
          </>
        );
    }
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#fafafa",
        alignItems: "center",
      }}
    >
      {renderLogin()}
      <PwChangeModal
        modalState={modalState}
        setModalState={setModalState}
        setLoginStep={setLoginStep}
        email={email}
      />
    </div>
  );
};

export default Login;
