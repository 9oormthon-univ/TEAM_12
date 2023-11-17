import React, { useEffect } from "react";
import { s } from "./style";

import moment from "moment";
import GoalColumn from "../goalColumn/GoalColumn";

function GoalScheduleContent() {
  const goals = [
    {
      goalId: 7,
      projectId: 3,
      title: "GoalAddTest",
      content: "goal Add 추가",
      startDate: "2023-11-2",
      endDate: "2023-11-15",
      complete: true,
      progress: 80
    },
    {
      goalId: 8,
      projectId: 3,
      title: "GoalMemberAddTest",
      content: "Goal에 Member 추가",
      startDate: "2023-11-10",
      endDate: "2023-11-15",
      complete: true,
      progress: 50
    },
    {
      goalId: 9,
      projectId: 3,
      title: "MemberAddTest",
      content: "Member 추가 후 agree 확인",
      startDate: "2023-11-14",
      endDate: "2023-11-15",
      complete: true,
      progress: 20
    }
  ];

  const startDay = "2023-11-2";
  const endDay = "2023-11-15";

  const dateStringMaker = date => {
    const dateMomnet = moment(date);
    return dateMomnet.format("YYYY년 M월 D일");
  };

  const getDateDiff = (start, end) => {
    const startMoment = moment(start);
    const endMoment = moment(end);
    return endMoment.diff(startMoment, "days") + 1;
  };

  const getLengthGoal = (doDay, finDay) => {
    return (getDateDiff(doDay, finDay) / getDateDiff(startDay, endDay)) * 100;
  };

  const getPositionGoal = doDay => {
    return (
      ((getDateDiff(startDay, doDay) - 1) / getDateDiff(startDay, endDay)) * 100
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
  return (
    <>
      <s.GoalDurationDiv>
        <s.GoalDurationText>{dateStringMaker(startDay)}</s.GoalDurationText>
        <s.GoalDurationText>{dateStringMaker(endDay)}</s.GoalDurationText>
      </s.GoalDurationDiv>
      <s.GoalList>
        {goals.length > 0 &&
          goals.map((e, i) => (
            <GoalColumn key={e.goalId} goal={getColumn(e)} index={i} />
          ))}
      </s.GoalList>
    </>
  );
}

export default GoalScheduleContent;
