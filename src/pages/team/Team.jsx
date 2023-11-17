import React from "react";
import { s } from "./style";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader";
import TeamNav from "../../components/team/teamNav/TeamNav";
import Todo from "../../components/team/todo/Todo.jsx";
import GoalScheduleWrapper from "../../components/goal/goalScheduleWrap/GoalScheduleWrapper.jsx";
import { Outlet } from "react-router-dom";

function Team() {
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
      todoId: 1,
      goalId: 3,
      goalContent: "FE 개발 1차 마감",
      todoContent: "Calendar Component",
      todoManagerId: 1,
      todoManagerNickName: "이종범",
      color: "blue"
    },
    {
      todoId: 2,
      goalId: 2,
      goalContent: "FE 개발 1차 마감",
      todoContent: "Todo Component",
      todoManagerId: 2,
      todoManagerNickName: "강민주",
      color: "green"
    },
    {
      todoId: 3,
      goalId: 4,
      goalContent: "FE 개발 1차 마감",
      todoContent: "TeamPage member 초...",
      todoManagerId: 2,
      todoManagerNickName: "심서현",
      color: "blue"
    },
    {
      todoId: 4,
      goalId: 5,
      goalContent: "BE 개발 1차 마감",
      todoContent: "나의 todo Filter 기능",
      todoManagerId: 4,
      todoManagerNickName: "박철민",
      color: "purple"
    },
    {
      todoId: 5,
      goalId: 6,
      goalContent: "BE 개발 1차 마감",
      todoContent: "구름 캐릭터 디자인",
      todoManagerId: 3,
      todoManagerNickName: "신유수",
      color: "yellow"
    },
    {
      todoId: 6,
      goalId: 1,
      goalContent: "BE 개발 1차 마감",
      todoContent: "디자인 1차 피드백",
      todoManagerId: 5,
      todoManagerNickName: "강희진",
      color: "orange"
    }
  ];

  const UnfinishedLists = [
    {
      todoId: 1,
      goalId: 2,
      goalContent: "FE 개발 1차 마감",
      todoContent: "도메인 구매하기",
      todoManagerId: 2,
      todoManagerNickName: "강민주",
      color: "blue"
    },
    {
      todoId: 2,
      goalId: 3,
      goalContent: "FE 개발 1차 마감",
      todoContent: "Progress 디자인 수정 반영",
      todoManagerId: 1,
      todoManagerNickName: "심서현",
      color: "green"
    },
    {
      todoId: 3,
      goalId: 10,
      goalContent: "BE 개발 1차 마감",
      todoContent: "CI/CD 파이프라인 구축",
      todoManagerId: 3,
      todoManagerNickName: "박철민",
      color: "orange"
    },
    {
      todoId: 4,
      goalId: 11,
      goalContent: "BE 개발 1차 마감",
      todoContent: "Cors 오류 수정",
      todoManagerId: 5,
      todoManagerNickName: "신유수",
      color: "purple"
    },
    {
      todoId: 5,
      goalId: 7,
      goalContent: "디자인 마감",
      todoContent: "MainPage 디자인",
      todoManagerId: 1,
      todoManagerNickName: "강희진",
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
          <TeamNav progress={20} teams={TeamNames} />
          <s.TeamPageContent>
            <GoalScheduleWrapper />
            <Todo today={TodayLists} unfinished={UnfinishedLists} />
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Team;
