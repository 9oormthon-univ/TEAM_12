import React from "react";
import { s } from "./style";

import GoalMemoriColumn from "../goalMemoriColumn/GoalMemoriColumn";

function GoalMemoriSchedule() {
  const goals = [
    {
      id: 1,
      text: "Something Todo Goal",
      width: 10,
      position: 0
    },
    {
      id: 2,
      text: "Goal1",
      width: 5,
      position: 10
    },
    {
      id: 3,
      text: "Goal2",
      width: 20,
      position: 25
    }
  ];

  const startDay = new Date(2023, 9, 14);
  const endDay = new Date(2023, 10, 14);

  const dateStringMaker = date => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
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
            <GoalMemoriColumn key={e.id} goal={e} index={i} />
          ))}
      </s.GoalList>
    </>
  );
}

export default GoalMemoriSchedule;
