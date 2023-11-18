import React, { useState } from "react";
import * as S from "./style";
import TeamPageBtn from "../../components/main/teamPageBtn/TeamPageBtn";
import AddNewTeamBtn from "../../components/main/addNewTeamBtn/AddNewTeamBtn";
import { userState } from "../../context/authState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function Main() {
  const [currentNav, setCurrentNav] = useState("Proceeding");
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const handleLogout = async () => {
    // try {
    //   const accessToken = userInfo.accessToken;
    //   const headers = {
    //     Authorization: `Bearer ${accessToken}` // Bearer Token 설정
    //   };
    //   const response = await axios.post("auth/logout/", null, {
    //     headers
    //   });

    //   if (response.status === 200) {
    //     setUserInfo(null);
    //     // 로컬 스토리지에서 로그인 정보 삭제
    //     localStorage.removeItem("userInfo");
    //     // 로그인 페이지로 이동
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.error("Error logging out:", error);
    //   alert("로그아웃 실패했습니다.");
    // }

    setUserInfo(null);
    alert("로그아웃 되었습니다!");
    localStorage.removeItem("userInfo");
  };

  return (
    <S.MainPageWrapper>
      <S.MainTitle>가치구름</S.MainTitle>

      <S.MainWrapper>
        <S.MainNavWrapper>
          {userInfo ? (
            <S.UserContent>
              <div>안녕하세요 {userInfo.nickname}님!</div>
              <img src="/Logout.svg" onClick={handleLogout} />
            </S.UserContent>
          ) : (
            <S.LoginContent to="/login">
              <div>로그인하세요!</div>
              <img src="/Right.svg" />
            </S.LoginContent>
          )}

          <S.MainNavBtn
            $isSelected={"Proceeding" == currentNav}
            onClick={() => setCurrentNav("Proceeding")}
          >
            진행중인 프로젝트
          </S.MainNavBtn>
          <S.MainNavBtn
            $isSelected={"Done" == currentNav}
            onClick={() => setCurrentNav("Done")}
          >
            완료한 프로젝트
          </S.MainNavBtn>
        </S.MainNavWrapper>

        <S.MainContentWrapper>
          {currentNav == "Proceeding" ? (
            <>
              <AddNewTeamBtn />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
            </>
          ) : (
            <>
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
              <TeamPageBtn teamId={1} />
            </>
          )}
        </S.MainContentWrapper>
      </S.MainWrapper>
    </S.MainPageWrapper>
  );
}

export default Main;
