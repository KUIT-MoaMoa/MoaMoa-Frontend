import React, { useEffect, useState } from "react";
import styles from "./RoomInviteFriend.module.css";
import Header from "../../../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../../../components/SearchBar/SearchBar";

const RoomInviteFriend = () => {
  const pageName = "친구 목록";
  const params = useParams();
  //   console.log("채팅방 ID : ", params.chatroomId);
  const navigate = useNavigate();

  // 상태로 friendData 관리
  const [friends, setFriends] = useState(friendData);
  const [selectedFriends, setSelectedFriends] = useState([]);

  // 친구 검색
  const [filteredfriends, setFilteredfriends] = useState([]);
  const [isInputText, setIsInputText] = useState("");

  // 클릭 시 체크되도록 구현. 다시 클릭 시 체크 해제. 검색창 위에 뜨는 것 클릭시 체크해제
  const handleInviteState = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id ? { ...friend, toInvite: !friend.toInvite } : friend
      )
    );
    setFilteredfriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id ? { ...friend, toInvite: !friend.toInvite } : friend
      )
    );
  };

  // 선택된 친구 배열 갱신
  useEffect(() => {
    const select = friends.filter((user) => user.toInvite === true);
    setSelectedFriends(select);
  }, [friends]);

  return (
    <div className={styles.PageWrapper}>
      <Header pageName={pageName} />
      {selectedFriends.length ? (
        <span
          className={styles.ConfirmButton}
          onClick={() => {
            console.log("초대할 친구 : ", selectedFriends);
            navigate(-1);
          }}
        >
          완료
        </span>
      ) : (
        <></>
      )}
      <div className={styles.MainArea}>
        {selectedFriends.length ? (
          <div className={styles.SelectedFriendWrapper}>
            {selectedFriends.map((item) => (
              <div
                key={item.id}
                className={styles.SelectedFriendContainer}
                onClick={() => handleInviteState(item.id)}
              >
                <span className={styles.SelectedFriendName}>
                  {item.userName}
                </span>
                <img
                  src="../../src/assets/Content/blueCancle.svg"
                  alt="선택 취소"
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

        <SearchBar
          setIsInputText={setIsInputText}
          setFiltered={setFilteredfriends}
          allData={friends}
        />
        {isInputText.length ? (
          <>
            <span className={styles.FriendCnt}>
              친구{" "}
              <span style={{ fontWeight: "700" }}>
                {filteredfriends.length}
              </span>
              명
            </span>
            <div className={styles.AllFriends}>
              {filteredfriends.map((item) => (
                <div
                  key={item.id}
                  className={styles.EachFriendContainer}
                  onClick={() => handleInviteState(item.id)}
                >
                  <div className={styles.FriendContent}>
                    <img
                      src="http://placehold.co/50"
                      alt="프로필 사진"
                      style={{ borderRadius: "50%" }}
                    />
                    <span className={styles.UsernameStyle}>
                      {item.userName}
                    </span>
                  </div>
                  {item.toInvite ? (
                    <img
                      src="../../src/assets/SelectButton/check.svg"
                      alt="선택됨"
                      style={{ width: "20px", height: "20px" }}
                    />
                  ) : (
                    <img
                      src="../../src/assets/SelectButton/uncheck.svg"
                      alt="선택안됨"
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <span className={styles.FriendCnt}>
              친구 <span style={{ fontWeight: "700" }}>{friends.length}</span>명
            </span>
            <div className={styles.AllFriends}>
              {friends.map((item) => (
                <div
                  key={item.id}
                  className={styles.EachFriendContainer}
                  onClick={() => handleInviteState(item.id)}
                >
                  <div className={styles.FriendContent}>
                    <img
                      src="http://placehold.co/50"
                      alt="프로필 사진"
                      style={{ borderRadius: "50%" }}
                    />
                    <span className={styles.UsernameStyle}>
                      {item.userName}
                    </span>
                  </div>
                  {item.toInvite ? (
                    <img
                      src="../../src/assets/SelectButton/check.svg"
                      alt="선택됨"
                      style={{ width: "20px", height: "20px" }}
                    />
                  ) : (
                    <img
                      src="../../src/assets/SelectButton/uncheck.svg"
                      alt="선택안됨"
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoomInviteFriend;

const friendData = [
  {
    id: 1,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 2,
    userName: "금나와라",
    img: "",
  },
  {
    id: 3,
    userName: "골든피기",
    img: "",
  },
  {
    id: 4,
    userName: "피그핑",
    img: "",
  },
  {
    id: 5,
    userName: "모아모아짱",
    img: "",
  },
  {
    id: 6,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 7,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 8,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 9,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 10,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 11,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 12,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 13,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 14,
    userName: "럭키머니",
    img: "",
  },
  {
    id: 15,
    userName: "럭키머니",
    img: "",
  },
];
