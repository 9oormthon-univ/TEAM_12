import React from "react";
import { s } from "./style";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader";
import TeamNav from "../../components/team/teamNav/TeamNav";

function Team() {
  const TeamNames = [
    { name: "이종범", part: "BE", color: "red" },
    { name: "강민주", part: "PD", color: "orange" },
    { name: "심서현", part: "Design", color: "yellow" },
    { name: "박철민", part: "FE", color: "green" },
    { name: "신유수", part: "FE", color: "blue" },
    { name: "강희진", part: "BE", color: "purple" }
  ];


  return (
    <s.Team>
      <TeamPageHeader
        name={"가치구름"}
        descript={"협업 기록을 통한 구름 키우기 서비스"}
      />
      <s.Line />
      <s.TeamPageBody>
        <TeamNav logo={""} teams={TeamNames} />
        <s.TeamPageContent>
        </s.TeamPageContent>
      </s.TeamPageBody>
    </s.Team>
  );
}

export default Team;
