import { s } from "./style";
import TeamNavMember from "../teamNavMember/TeamNavMember";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { useState } from "react";

function TeamNav({ progress, teams }) {
  const dispatch = useDispatch();

  const addMemberHandler = () => {
    dispatch(
      modalAction.setShowModal({
        type: "project",
        title: "member",
        addInfo: {}
      })
    );
  };

  const members = teams.map((e, index) => (
    <TeamNavMember
      key={index}
      nickname={e.nickname}
      role={e.role}
      col={e.color}
    />
  ));

  return (
    <s.NavWrapper>
      <s.LogoWrapper>
        <s.Logo src={"/cloud/" + (Math.floor(progress / 20) + 1) + ".svg"} />
      </s.LogoWrapper>
      <s.MemberListWrapper>
        <s.MemberPlusLayer>
          <s.MemberText>Member</s.MemberText>
          <s.MemberPlusBtn onClick={addMemberHandler}>
            <s.PlusBtnImg src="/Plus.png" />
          </s.MemberPlusBtn>
        </s.MemberPlusLayer>
        <s.MemberList>{members}</s.MemberList>
      </s.MemberListWrapper>
    </s.NavWrapper>
  );
}

export default TeamNav;
