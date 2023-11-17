import TeamCommonAlert from "../../components/team/teamCommon/TeamCommonAlert.jsx";
import Top from "./../../components/goalDetail/top/Top.jsx";
import GoalInfo from "./../../components/goalDetail/goalInfo/GoalInfo";
import { Outlet, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { s } from "./styles";
import TimelineView from "../../components/goalDetail/timelineView/TimelineView.jsx";
import TodoView from "./../../components/goalDetail/todoView/TodoView";
import TeamCommonCommentPost from "../../components/team/teamCommon/TeamCommonCommentPost.jsx";
import { API } from "../../api/axios.js";

function Goal() {
  const param = useParams();
  const [activeTab, setActiveTab] = useState("Timeline");
  const [timelineData, setTimelineData] = useState([]);
  const [todoListData, setTodoListData] = useState([]);
  const [goalTitle, setGoalTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineResponse = await API.get(
          `/api/goals/${param.goalId}/timeline`
        );
        setTimelineData(timelineResponse.data);

        const todoListResponse = await API.get(
          `/api/goals/${param.goalId}/todos`
        );
        setTodoListData(todoListResponse.data);
      } catch (error) {
        console.log("에러 발생", error);
        setTimelineData(DUMMY_TIMELINE);
        setTodoListData(DUMMY_TODOLIST);
      }
    };
    fetchData();

    const DUMMY_TODOLIST = [
      {
        goalId: 1,
        goalContent: "FE 개발 1차 마감",
        todoId: 1,
        todoContent: "도메인 구매하기",
        todoManager: "blue",
        isComplete: false
      },
      {
        goalId: 2,
        goalContent: "FE 개발 1차 마감",
        todoId: 2,
        todoContent: "Progress 디자인 수정 반영",
        todoManager: "green",
        isComplete: false
      },
      {
        goalId: 3,
        goalContent: "FE 개발 1차 마감",
        todoId: 3,
        todoContent: "TeamPage member 초대 오류 수정하기 2",
        todoManager: "blue",
        isComplete: true
      },
      {
        goalId: 4,
        goalContent: "FE 개발 1차 마감",
        todoId: 4,
        todoContent: "TeamPage member 초대 오류 수정하기",
        todoManager: "green",
        isComplete: true
      }
    ];

    const DUMMY_TIMELINE = {
      goalCommentList: [
        {
          createdTime: "2023-11-15T21:25:52.560149",
          content: "todo를 완성하는데 어려움이 있네요요",
          commentMemberId: 1,
          emojiCount: 2,
          feelingCheckMemberId: [2, 1]
        }
      ],
      todoCommentList: [
        {
          todoId: 3,
          todoContent: "개발 시작11",
          todoEndDate: "2023-11-15",
          finishDate: "2023-11-17T00:34:46.842115",
          todoManagerMemberId: 1,
          commentList: [
            {
              createdTime: "2023-11-15T21:31:30.298951",
              content: "todo를 완성하는데 어려움이 있네요요",
              commentMemberId: 1,
              emojiCount: 2,
              feelingCheckMemberId: [2, 1]
            }
          ]
        },
        {
          todoId: 4,
          todoContent: "개발 시작22",
          todoEndDate: "2023-11-30",
          finishDate: "2023-11-17T00:34:55.886765",
          todoManagerMemberId: 1,
          commentList: []
        }
      ]
    };
    setGoalTitle(DUMMY_TODOLIST[0].goalContent ?? "");
  }, [param.goalId]);

  const TabClickHandler = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <s.Backdrop to={".."} />
      <s.Content>
        {!param.todoId && (
          <s.GoalPageWrapper>
            <TeamCommonAlert />
            <Top />
            <GoalInfo />
            <s.NavBarWrapper>
              <s.NavBtnWrapper>
                <s.NavBtn
                  onClick={() => TabClickHandler("Timeline")}
                  selected={activeTab === "Timeline"}
                >
                  Timeline
                </s.NavBtn>
                <s.NavBtn
                  onClick={() => TabClickHandler("Todo")}
                  selected={activeTab === "Todo"}
                >
                  Todo
                </s.NavBtn>
              </s.NavBtnWrapper>
              <s.NavLine />
            </s.NavBarWrapper>
            <s.ViewWrapper>
              {activeTab === "Timeline" && (
                <TimelineView
                  goalName={goalTitle}
                  timelineData={timelineData}
                />
              )}
              {activeTab === "Todo" && <TodoView todoList={todoListData} />}
            </s.ViewWrapper>
            <TeamCommonCommentPost />
          </s.GoalPageWrapper>
        )}
        <main style={{ height: "100%" }}>
          <Outlet />
        </main>
      </s.Content>
    </>
  );
}

export default Goal;
