import React from "react";
import { s } from "./style.jsx";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader.jsx";
import TeamNav from "../../components/team/teamNav/TeamNav.jsx";

import { Outlet } from "react-router-dom";

import GoalScheduleContent from "../../components/goal/goalSchedule/GoalScheduleContent.jsx";
import TodoCount from "../../components/todo/todoCount/TodoCount.jsx";

function Report() {
  const startDate = "2023-11-2";
  const endDate = "2023-11-15";
  const TeamNames = [
    { name: "이종범", part: "BE", color: "red" },
    { name: "강민주", part: "PD", color: "orange" },
    { name: "심서현", part: "Design", color: "yellow" },
    { name: "박철민", part: "FE", color: "green" },
    { name: "신유수", part: "FE", color: "blue" },
    { name: "강희진", part: "BE", color: "purple" }
  ];

  return (
    <>
      <main>
        <Outlet />
      </main>
      <s.Team>
        <TeamPageHeader
          name={"가치구름"}
          descript={"협업 기록을 통한 구름 키우기 서비스"}
        />
        <s.Line />
        <s.TeamPageBody>
          <TeamNav logo={""} teams={TeamNames} />
          <s.TeamPageContent>
            {/* ---- 투두 카운트 ---- */}
            <s.MemoriPageHeaderWrapper>
              <s.MemoriPageHeaderTitle>
                총 <span>230건</span>의 Todo가 있었어요.
              </s.MemoriPageHeaderTitle>
              <s.MemoriPageHeaderSubtitle>
                Todo 참여율을 확인해보세요!
              </s.MemoriPageHeaderSubtitle>
            </s.MemoriPageHeaderWrapper>
            <TodoCount />
            {/* ---- 투두 카운트 ---- */}

            {/* ---- 골 달성 정도 체크  ---- */}
            <s.MemoriPageHeaderWrapper>
              <s.MemoriPageHeaderTitle>
                총 <span>10건</span>의 Goal이 있었어요.
              </s.MemoriPageHeaderTitle>
              <s.MemoriPageHeaderSubtitle>
                Goal의 목표 수행률을 확인해보세요!
              </s.MemoriPageHeaderSubtitle>
            </s.MemoriPageHeaderWrapper>
            <GoalScheduleContent
              startDate={startDate}
              endDate={endDate}
              type="report"
            />
            {/* ---- 골 달성 정도 체크  ---- */}
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Report;
