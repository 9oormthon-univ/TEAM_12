import React, { useEffect, useState } from "react";
import { s } from "./style";

import moment from "moment";
import GoalColumn from "../goalColumn/GoalColumn";
import { useParams } from "react-router-dom";
import { API } from "../../../api/axios";
import { useSelector } from "react-redux";

function GoalScheduleContent({ type = "team", Date }) {
  
  const startDate = Date?.start;
  const endDate = Date?.end;
  const finishDate = Date?.fin;

  
  const params = useParams();

  // const [goals, setGoals] = useState([]);

  const {goals} = useSelector(s=>s.goal);


  // const fetchData = async () => {
  //   try {
  //     var response;
  //     // ----팀페이지
  //     if (type == "team") {
  //       response = await API.get(`/api/projects/${params.teamId}`);
  //       setGoals(response.data.goals);
  //     }
  //     // -----리포트페이지
  //     else if (type == "report") {
  //       response = await API.get(`/api/goals/report/${params.teamId}`);
  //       setGoals(response.data);
  //     }
  //   } catch (error) {
  //     console.log("----goal schedule content 에러~", error);
  //     //api없을 경우 임시로 넣어두는 데이터, 추후 삭제 예정
  //     // ----팀페이지
  //     if (type == "team") {
  //       setGoals(Dummy_goal_team);
  //     }
  //     // -----리포트페이지
  //     else if (type == "report") {
  //       setGoals(Dummy_goal_report);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //---- 날짜 반환 년, 월, 일
  const dateStringMaker = date => {
    const dateMomnet = moment(date, "YYYY-M-D");
    return dateMomnet.format("YYYY년 M월 D일");
  };

  //---- 날짜 사이 간격 구하기
  const getDateDiff = (start, end) => {
    const startMoment = moment(start, "YYYY-M-D");
    const endMoment = moment(end, "YYYY-M-D");
    return endMoment.diff(startMoment, "days") + 1;
  };

  //---- goal 길이구하기
  const getLengthGoal = (doDay, finDay) => {
    return (getDateDiff(doDay, finDay) / getDateDiff(startDate, endDate)) * 100;
  };
  //---- goal 위치 구하기
  const getPositionGoal = doDay => {
    return (
      ((getDateDiff(startDate, doDay) - 1) / getDateDiff(startDate, endDate)) *
      100
    );
  };

  const getColumn = data => {

    return {
      id: data.goalId,
      text: data.title,
      width: getLengthGoal(data.startDate, data.endDate),
      position: getPositionGoal(data.startDate),
      progress: data.progress
    };
  };

  // const Dummy_goal_team = [
  //   {
  //     goalId: 7,
  //     projectId: 3,
  //     title: "GoalAddTest",
  //     content: "goal Add 추가",
  //     startDate: "2023-11-2",
  //     endDate: "2023-11-15",
  //     complete: true,
  //     progress: 80
  //   },
  //   {
  //     goalId: 8,
  //     projectId: 3,
  //     title: "GoalMemberAddTest",
  //     content: "Goal에 Member 추가",
  //     startDate: "2023-11-10",
  //     endDate: "2023-11-15",
  //     complete: true,
  //     progress: 50
  //   },
  //   {
  //     goalId: 9,
  //     projectId: 3,
  //     title: "MemberAddTest",
  //     content: "Member 추가 후 agree 확인",
  //     startDate: "2023-11-14",
  //     endDate: "2023-11-15",
  //     complete: true,
  //     progress: 20
  //   }
  // ];

  // const Dummy_goal_report = [
  //   {
  //     goalId: 1,
  //     projectId: 1,
  //     title: "개발하기",
  //     startDate: "2023-11-05",
  //     endDate: "2023-11-13",
  //     finishDate: null,
  //     complete: false,
  //     progress: 20
  //   },
  //   {
  //     goalId: 2,
  //     projectId: 1,
  //     title: "GoalAddTest",
  //     startDate: "2023-11-6",
  //     endDate: "2023-11-7",
  //     finishDate: "2023-11-9",
  //     complete: true,
  //     progress: 20
  //   }
  // ];

  return (
    <>
      {type == "report" ? (
        <s.MemoriPageHeaderWrapper>
          <s.MemoriPageHeaderTitle>
            총 <span>{goals.length}건</span>의 Goal이 있었어요.
          </s.MemoriPageHeaderTitle>
          <s.MemoriPageHeaderSubtitle>
            Goal의 목표 수행률을 확인해보세요!
          </s.MemoriPageHeaderSubtitle>
        </s.MemoriPageHeaderWrapper>
      ) : (
        ""
      )}

      <s.GoalDurationDiv>
        <s.GoalDurationText>{dateStringMaker(startDate)}</s.GoalDurationText>
        <s.GoalDurationText>{dateStringMaker(endDate)}</s.GoalDurationText>
      </s.GoalDurationDiv>
      <s.GoalList style={{ marginBottom: type == "report" ? "3.75rem" : "" }}>
        {goals.length > 0 &&
          goals.map((e, i) => (
            <GoalColumn key={e.goalId} goal={getColumn(e)} index={i} />
          ))}
      </s.GoalList>
    </>
  );
}

export default GoalScheduleContent;
