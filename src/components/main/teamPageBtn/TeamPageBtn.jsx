import React from "react";
import * as S from "./style";

function TeamPageBtn({ teamId }) {
  return (
    <S.TeamPageBtnWrapper to={`/teamId/${teamId}`}>
      <S.TeamPageBtnThumbnail />
      <S.TeamPageBtnInfo>
        <S.TemaPageBtnTitle>프로젝트 이름</S.TemaPageBtnTitle>
        <S.TeamPageBtnContent>프로젝트 설명</S.TeamPageBtnContent>`
      </S.TeamPageBtnInfo>
    </S.TeamPageBtnWrapper>
  );
}

export default TeamPageBtn;
