import React from "react";
import * as S from "./style";
import TeamPageBtn from "../../components/main/teamPageBtn/TeamPageBtn";
import AddNewTeamBtn from "../../components/main/addNewTeamBtn/AddNewTeamBtn";

function Main() {
  return (
    <>
      <S.MainTitle>메인페이지</S.MainTitle>

      <S.MainWrapper>
        {/* 네브바 나중에 컴포넌트로 분리해요! */}
        <S.MainNavWrapper>
          <S.MainNavBtn>버튼1</S.MainNavBtn>
          <S.MainNavBtn>버튼2</S.MainNavBtn>
        </S.MainNavWrapper>

        <S.MainContentWrapper>
          <AddNewTeamBtn />
          <TeamPageBtn teamId={1} />
          <TeamPageBtn teamId={1} />
          <TeamPageBtn teamId={1} />
          <TeamPageBtn teamId={1} />
          <TeamPageBtn teamId={1} />
        </S.MainContentWrapper>
      </S.MainWrapper>
    </>
  );
}

export default Main;
