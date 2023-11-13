import React from "react";
import * as S from "./style";
import TeamPageBtn from "../../components/main/teamPageBtn/TeamPageBtn";

function Main() {
  return (
    <>
      <S.MainTitle>메인페이지</S.MainTitle>
      <div style={{ padding: "40px" }}>
        코드 규약 : 추후 삭제 예정
        <br /> 폴더명 - 소문자/ 컴포넌트명 - 대문자로 시작합니다 추후 배포할때
        경로 꼬일거 대비해서 맞추면 좋을 것 같아요.
        <br />
        색깔 쓸 일 있으면, color: {"$"}
        {"{"}props ={">"} props.theme.colors.gray2
        {"}"}; 이렇게 써주시면 됩니다. gray2 에 들어갈 색은 피그마랑 똑같이
        설정해뒀어요
        <br />
        나중에 코드 재활용을 위해 html태그 사용은 지양합시다! 전부
        컴포넌트&스타일 태그먹여서 사용하면 될 것 같아요 컴포넌트단위별로
        피그마에 나눠놨으니 참고 부탁드려요
      </div>
      <S.MainWrapper>
        {/* 네브바 나중에 컴포넌트로 분리해요! */}
        <S.MainNavWrapper>
          <S.MainNavBtn>버튼1</S.MainNavBtn>
          <S.MainNavBtn>버튼2</S.MainNavBtn>
        </S.MainNavWrapper>

        <S.MainContentWrapper>
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
