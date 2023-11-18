import React from "react";
import { s } from "./style";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader";
import TeamNav from "../../components/team/teamNav/TeamNav";
import Todo from "../../components/team/todo/Todo.jsx";
import GoalScheduleWrapper from "../../components/goal/goalScheduleWrap/GoalScheduleWrapper.jsx";
import { Outlet, useLoaderData } from "react-router-dom";

function Team() {
  //아래에 useLoaderData는 main에서 이 페이지에다가 getTeamInfo라는 함수로 loader를 이용한 데이터를
  //받을 것이니 받을 준비해라~ 이뜻 입니다 아마 teamInfos에 괄호{}씌워서 구조분해할당 해야할수도 잇음
  const teamInfos = useLoaderData();

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
          name={teamInfos.title}
          descript={teamInfos.description}
        />
        <s.Line />
        <s.TeamPageBody>
          <TeamNav progress={teamInfos.progress} teams={teamInfos.members} />
          <s.TeamPageContent>
            <GoalScheduleWrapper
              Date={{
                start: teamInfos.startDate,
                end: teamInfos.endDate,
                fin: teamInfos.finishDate
              }}
            />
            <Todo today={TodayLists} unfinished={UnfinishedLists} />
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Team;
