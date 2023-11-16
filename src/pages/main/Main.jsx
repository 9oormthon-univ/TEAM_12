import React, { useState } from "react";
import * as S from "./style";
import TeamPageBtn from "../../components/main/teamPageBtn/TeamPageBtn";
import AddNewTeamBtn from "../../components/main/addNewTeamBtn/AddNewTeamBtn";

function Main() {
  const [currentNav, setCurrentNav] = useState("Proceeding");

  return (
    <S.MainPageWrapper>
      <S.MainTitle>가치구름</S.MainTitle>

      <S.MainWrapper>
        <S.MainNavWrapper>
          <S.UserContent>안녕하세요 심서현님!</S.UserContent>
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
