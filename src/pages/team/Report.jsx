import React from "react";
import { s } from "./style.jsx";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader.jsx";
import TeamNav from "../../components/team/teamNav/TeamNav.jsx";

import { Outlet, useLoaderData } from "react-router-dom";

import GoalScheduleContent from "../../components/goal/goalSchedule/GoalScheduleContent.jsx";
import TodoCount from "../../components/todo/todoCount/TodoCount.jsx";
import Memori from "../../components/report/memori/Memori.jsx";

function Report() {
  const teamInfos = useLoaderData();

  return (
    <>
      <main>
        <Outlet />
      </main>
      <s.Team>
        <TeamPageHeader
          name={teamInfos.title}
          descript={teamInfos.description}
        />
        <s.Line />
        <s.TeamPageBody>
          <TeamNav progress={teamInfos.progress} teams={teamInfos.members} />
          <s.TeamPageContent>
            {/* ---- 투두 카운트 ---- */}
            <TodoCount />
            {/* ---- 투두 카운트 ---- */}

            {/* ---- 골 달성 정도 체크  ---- */}
            <GoalScheduleContent
              Date={{
                start: teamInfos.startDate,
                end: teamInfos.endDate,
                fin: teamInfos.finishDate
              }}
              type="report"
            />
            {/* ---- 골 달성 정도 체크  ---- */}

            {/* ---- 회고  ---- */}
            <Memori />
            {/* ---- 회고  ---- */}
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Report;
