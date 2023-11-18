import React, { useEffect } from "react";
import { s } from "./style";
import TeamPageHeader from "../../components/team/teamPageHeader/TeamPageHeader";
import TeamNav from "../../components/team/teamNav/TeamNav";
import Todo from "../../components/team/todo/Todo.jsx";
import GoalScheduleWrapper from "../../components/goal/goalScheduleWrap/GoalScheduleWrapper.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../store/modal/modalSlice.jsx";
import { goalAction } from "../../store/goal/goalSlicer.jsx";

function Team() {
  //아래에 useLoaderData는 main에서 이 페이지에다가 getTeamInfo라는 함수로 loader를 이용한 데이터를
  //받을 것이니 받을 준비해라~ 이뜻 입니다 아마 teamInfos에 괄호{}씌워서 구조분해할당 해야할수도 잇음
  const teamInfos = useLoaderData();
  const goals = useSelector(s=>s.goal);

  // console.log(teamInfos);


  const dispatch = useDispatch();

  // useEffect(()=>{
    dispatch(goalAction.getGoals(teamInfos.goals))
  // },[goals])
  
  


  if(teamInfos.members.length === 0) dispatch(modalAction.setShowModal({
      type: "project",
      title: "member",
      addInfo: {isFirst:true}
    }))
  else dispatch(modalAction.setCloseModal({}))

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
            <Todo />
          </s.TeamPageContent>
        </s.TeamPageBody>
      </s.Team>
    </>
  );
}

export default Team;
