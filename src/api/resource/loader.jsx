import { redirect } from "react-router-dom";
import { API } from "../axios";
import { useEffect, useState } from "react";

export const getTeamInfo = async ({ request, params }) => {
  // const [data, setData] = useState({});
  // params로 이 함수가 현재 실행할 곳의 params를 불러와서 팀, 프로젝트의 아이디를 알수 있음
  const [router] = Object.entries(params);

  const Dummy_Data = {
    projectId: 4,
    title: "TODO테스트",
    description: "TODO 테스트 위한 API",
    password: "1234",
    mode: "NORMAL",
    startDate: "2023-11-2",
    finishDate: null,
    endDate: "2023-11-19",

    members: [
      // {
      //   id: 1,
      //   nickname: "GOALTODOAPI",
      //   role: "BE"
      // },
      // {
      //   id: 2,
      //   nickname: "GOALTODOAPI",
      //   role: "BE"
      // },
      // {
      //   nickname: "GOALTODOAPI",
      //   role: "BE"
      // }
    ],
    progress: 0.0
    // ,goals: [
    //   {
    //     goalId: 10,
    //     projectId: 4,
    //     title: "TODO-TEST",
    //     content: "GOAL-todo 추가",
    //     startDate: "2023-11-14",
    //     endDate: "2023-11-15",
    //     goalAgreeList: [
    //       {
    //         goalAgreeId: 20,
    //         memberId: 8,
    //         memberCheck: false
    //       }
    //     ]
    //   }
    // ],
  };
  try {
    const res = await API.get(`/api/projects/${router[1]}`);
    console.log("로더 성공");
    return res.data;
  } catch {
    console.log("로더 실패");
    return Dummy_Data;
  }
};
