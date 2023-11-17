import React from "react";
import { s } from "./style";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader";
import TeamNav from "../../components/team/teamNav/TeamNav";

import GoalScheduleWrapper from "../../components/goal/goalScheduleWrap/GoalScheduleWrapper.jsx";
import { Outlet } from "react-router-dom";
import TodoCount from "../../components/memori/todoCount/TodoCount.jsx";
import GoalSchedule from "../../components/goal/goalSchedule/GoalSchedule.jsx";
import GoalMemori from "../../components/memori/goalMemori/goalMemoriSchedule/GoalMemoriSchedule.jsx";
import GoalMemoriSchedule from "../../components/memori/goalMemori/goalMemoriSchedule/GoalMemoriSchedule.jsx";

function Memori() {
  const TeamNames = [
    { name: "이종범", part: "BE", color: "red" },
    { name: "강민주", part: "PD", color: "orange" },
    { name: "심서현", part: "Design", color: "yellow" },
    { name: "박철민", part: "FE", color: "green" },
    { name: "신유수", part: "FE", color: "blue" },
    { name: "강희진", part: "BE", color: "purple" }
  ];

  const TodayLists = [
    {
      id: 1,
      category: "FE 개발 1차 마감",
      title: "Calendar Component",
      color: "blue"
    },
    {
      id: 2,
      category: "FE 개발 1차 마감",
      title: "Todo Component",
      color: "green"
    },
    {
      id: 3,
      category: "FE 개발 1차 마감",
      title: "TeamPage member 초...",
      color: "blue"
    },
    {
      id: 4,
      category: "BE 개발 1차 마감",
      title: "나의 todo Filter 기능",
      color: "purple"
    },
    {
      id: 5,
      category: "BE 개발 1차 마감",
      title: "구름 캐릭터 디자인",
      color: "yellow"
    },
    {
      id: 6,
      category: "BE 개발 1차 마감",
      title: "디자인 1차 피드백",
      color: "orange"
    }
  ];

  const UnfinishedLists = [
    {
      id: 1,
      category: "FE 개발 1차 마감",
      title: "도메인 구매하기",
      color: "blue"
    },
    {
      id: 2,
      category: "FE 개발 1차 마감",
      title: "Progress 디자인 수정 반영",
      color: "green"
    },
    {
      id: 3,
      category: "BE 개발 1차 마감",
      title: "CI/CD 파이프라인 구축",
      color: "orange"
    },
    {
      id: 4,
      category: "BE 개발 1차 마감",
      title: "Cors 오류 수정",
      color: "purple"
    },
    {
      id: 5,
      category: "디자인 마감",
      title: "MainPage 디자인",
      color: "yellow"
    }
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
            <GoalMemoriSchedule />
            {/* ---- 골 달성 정도 체크  ---- */}
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Memori;
