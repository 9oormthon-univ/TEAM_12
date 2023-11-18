import { s } from "./style";

function TeamNavMember({ nickname, role, col }) {
  return (
    <s.MemberWrapper>
      <s.MemberColor $background={col} />
      <s.MemberTextDiv>
        <s.MemberTextName>{nickname}</s.MemberTextName>
        <s.MemberTextPart>{role}</s.MemberTextPart>
      </s.MemberTextDiv>
    </s.MemberWrapper>
  );
}

export default TeamNavMember;
