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
  const params = useParams();
  const [goalData, setGoalData] = useState({});

  const [activeTab, setActiveTab] = useState("Timeline");
  const [timelineData, setTimelineData] = useState([]);
  const [todoListData, setTodoListData] = useState([]);
  const [goalTitle, setGoalTitle] = useState("");

  const fetchData = async () => {
    try {
      const response = await API.get(`/api/goals/${params.goalId}`);
      setGoalData(response.data);
    } catch {
      console.log(Dummy_Goal.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Dummy_Goal = {
    data: {
      goalId: 10,
      projectId: 4,
      title: "TODO-TEST",
      content: "GOAL-todo 추가",
      startDate: "2023-11-14",
      endDate: "2023-11-15",
      goalAgreeList: [
        {
          goalAgreeId: 20,
          memberId: 8,
          memberCheck: false
        }
      ],
      todoList: [
        {
          goalId: 10,
          goalContent: "GOAL-todo 추가",
          todoId: 2,
          todoContent: "testTodo",
          todoManagerMemberId: 1,
          todoManagerNickName: "testmember",
          isComplete: false,
          todoEndDate: "2023-11-15"
        },
        {
          goalId: 10,
          goalContent: "GOAL-todo 추가",
          todoId: 3,
          todoContent: "testTodo",
          todoManagerMemberId: 8,
          todoManagerNickName: "GOALTODOAPI",
          isComplete: true,
          todoEndDate: "2023-11-15"
        },
        {
          goalId: 10,
          goalContent: "GOAL-todo 추가",
          todoId: 4,
          todoContent: "투두매니저id",
          todoManagerMemberId: 8,
          todoManagerNickName: "GOALTODOAPI",
          isComplete: false,
          todoEndDate: "2023-11-15"
        }
      ],
      progress: 33.333336,
      complete: false
    }
  };

  const DUMMY_TODOLIST = [
    {
      groupId: 10,
      goalContent: "GOAL-todo 추가",
      todoId: 2,
      todoContent: "testTodo",
      todoManagerId: 1,
      todoManagerNickName: "testmember",
      isComplete: false
    },
    {
      groupId: 10,
      goalContent: "GOAL-todo 추가",
      todoId: 3,
      todoContent: "testTodo",
      todoManagerId: 8,
      todoManagerNickName: "GOALTODOAPI",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineResponse = await API.get(
          `/api/goals/${params.goalId}/timeline`
        );
        setTimelineData(timelineResponse.data);

        const todoListResponse = await API.get(
          `/api/goals/${params.goalId}/todos`
        );
        setTodoListData(todoListResponse.data);
      } catch (error) {
        console.log("----- Goal 에러~", error);
        setTimelineData(DUMMY_TIMELINE);
        setTodoListData(DUMMY_TODOLIST);
      }
    };
    fetchData();
    setGoalTitle(DUMMY_TODOLIST[0].goalContent ?? "");
  }, [params.goalId]);

  const TabClickHandler = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <s.Backdrop to={".."} />
      <s.Content>
        {!params.todoId && (
          <s.GoalPageWrapper>
            <TeamCommonAlert />
            <Top data={goalData}/>
            <GoalInfo data={goalData}/>
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
                  goalName={goalData.title}
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
