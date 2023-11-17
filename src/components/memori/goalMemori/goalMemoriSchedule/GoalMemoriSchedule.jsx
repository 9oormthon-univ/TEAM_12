import React from "react";
import { s } from "./style";

import GoalMemoriColumn from "../goalMemoriColumn/GoalMemoriColumn";
import moment from "moment";

function GoalMemoriSchedule() {
  const getColumn = goal => {};
  const goals = [
    {
      goalId: 7,
      projectId: 3,
      title: "GoalAddTest",
      content: "goal Add 추가",
      startDate: "2023-11-14",
      endDate: "2023-11-15",
      goalAgreeList: [
        {
          goalAgreeId: 11,
          memberId: 5,
          memberCheck: true
        },
        {
          goalAgreeId: 16,
          memberId: 7,
          memberCheck: true
        },
        {
          goalAgreeId: 19,
          memberId: 6,
          memberCheck: true
        }
      ],
      complete: true
    },
    {
      goalId: 8,
      projectId: 3,
      title: "GoalMemberAddTest",
      content: "Goal에 Member 추가",
      startDate: "2023-11-14",
      endDate: "2023-11-16",
      goalAgreeList: [
        {
          goalAgreeId: 12,
          memberId: 5,
          memberCheck: true
        },
        {
          goalAgreeId: 13,
          memberId: 6,
          memberCheck: true
        },
        {
          goalAgreeId: 17,
          memberId: 7,
          memberCheck: true
        }
      ],
      complete: true
    },
    {
      goalId: 9,
      projectId: 3,
      title: "MemberAddTest",
      content: "Member 추가 후 agree 확인",
      startDate: "2023-11-14",
      endDate: "2023-11-15",
      goalAgreeList: [
        {
          goalAgreeId: 14,
          memberId: 5,
          memberCheck: true
        },
        {
          goalAgreeId: 15,
          memberId: 6,
          memberCheck: true
        },
        {
          goalAgreeId: 18,
          memberId: 7,
          memberCheck: true
        }
      ],
      complete: true
    }
  ];

  const startDay = moment("2023-11-13");
  const endDay = moment("2023-11-15");

  const dateStringMaker = date => {
    return date.format("YYYY년 M월 D일");
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
