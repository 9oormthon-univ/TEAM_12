import { redirect } from "react-router-dom";
import { API } from "../axios";
import { useEffect, useState } from "react";

export const getTeamInfo = async ({ request, params }) => {
  // const [data, setData] = useState({});
  // params로 이 함수가 현재 실행할 곳의 params를 불러와서 팀, 프로젝트의 아이디를 알수 있음
  const [router] = Object.entries(params);

  const Dummy_Data = {
    projectId: 3,
    title: "회고록테스트",
    description: "회고록 테스트 위한 API",
    password: "1234",
    mode: "NORMAL",
    startDate: "2023-11-13",
    finishDate: "2023-11-15",
    endDate: "2023-11-19",
    goals: [
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
    ],
    members: [
      {
        id: 5,
        nickname: "--MEMBER API TEST--",
        role: "BE",
        color: "red"
      },
      {
        id: 6,
        nickname: "!-MEMBER API TEST-!",
        role: "FE",
        color: "yellow"
      },
      {
        id: 7,
        nickname: "멤버&goalAgree",
        role: "PD",
        color: "green"
      }
    ],
    progress: 100.0
  };

  // try {
  //   const res = await API.get(`projects/${router[1]}`);
  //   return res.data;
  // } catch {
  return Dummy_Data;
  // }

  // if (res.status > 299) alert("으악 에러다!");

  // 아마 별다른 에러가 아니면 res.data에 우리가 원하는 프로젝트 단건 조회 답이 옵니다
  // 그리고 이걸 쓸 팀페이지에 추가 설명 있습니다.
  // return data;
};
