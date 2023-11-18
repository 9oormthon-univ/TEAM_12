import { s } from "./style.jsx";
import TeamCommonAlert from "./../teamCommon/TeamCommonAlert";
import TeamCommonSectionTitle from "../teamCommon/TeamCommonSectionTitle.jsx";

import TeamCalendar from "../teamCalendar/TeamCalendar.jsx";
import { useEffect, useState } from "react";
import moment from "moment";

import TodoBtnWrap from "../../todo/todoBtnWrap/TodoBtnWrap.jsx";
import TodoEntry from "./../../todo/todoEntry/TodoEntry";
import { API } from "../../../api/axios.js";
import { useRecoilState } from "recoil";
import { userState } from "../../../context/authState.jsx";

function Todo() {
  const Dummy_displayDate = [
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 3,
      todoContent: "개발 시작11",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false,
      todoEndDate: "2023-11-15"
    },
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 4,
      todoContent: "개발 시작22",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false,
      todoEndDate: "2023-11-30"
    }
  ];

  const Dummy_incomplete = [
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 3,
      todoContent: "개발 시작11",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false,
      todoEndDate: "2023-11-15"
    },
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 4,
      todoContent: "개발 시작22",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false,
      todoEndDate: "2023-11-30"
    }
  ];

  const Dummy_myTodo = [
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 3,
      todoContent: "개발 시작11",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false
    },
    {
      goalId: 1,
      goalContent: "백엔드 개발",
      todoId: 4,
      todoContent: "개발 시작22",
      todoManagerMemberId: 1,
      todoManagerNickName: "하나",
      isComplete: false
    }
  ];

  const [displayDate, setDisplayDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY년 M월 D일")
  );
  const [todayTodo, setTodayTodo] = useState("");
  const [unfinishedTodo, setUnfinishedTodo] = useState("");
  const [myTodo, setMyTodo] = useState("");
  const [myTodoClicked, setMyTodoClicked] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const getSelectedDate = date => {
    setSelectedDate(moment(date).format("YYYY년 M월 D일"));
    setDisplayDate(moment(date).format("YYYY-MM-DD"));
  };

  const unfinishedDescription = "아직 완료되지 않았어요";

  const fetchTodayTodoData = async () => {
    try {
      const response = await API.get(`/api/todos?date=${displayDate}`);
      setTodayTodo(response.data.data);
    } catch (error) {
      console.log("-----Todo displayDate 에러 발생", error);
      setTodayTodo(Dummy_displayDate);
      console.log(1);
    }
  };
  const fetchUnfinishedData = async () => {
    try {
      const response = await API.get(`api/todos/incomplete`);
      setUnfinishedTodo(response.data.data);
    } catch (error) {
      console.log("-----Todo incomplete", error);
      setUnfinishedTodo(Dummy_incomplete);
    }
  };

  const fetchMyTodoData = async () => {
    try {
      const response = await API.get(`api/todos/${(userInfo.userId % 10) + 1}`);
      setMyTodo(response.data.data);
    } catch (error) {
      console.log("-----My todo", error);
      setMyTodo(Dummy_myTodo);
    }
  };

  useEffect(() => {
    fetchTodayTodoData();
    fetchUnfinishedData();
    fetchMyTodoData();
  }, []);

  return (
    <s.TodoWrapper>
      <TeamCommonSectionTitle title="Todo" />
      <TeamCommonAlert />
      <TodoBtnWrap setData={setMyTodoClicked}/>
      <s.TodoContentsWrapper>
        <TeamCalendar $getSelectedDate={getSelectedDate} />

        <s.TodoListsWrapper>
          <s.Today>
            <s.TodayDate>{selectedDate}</s.TodayDate>
            {myTodoClicked
              ? todayTodo &&
                todayTodo.map((t, index) => (
                  <TodoEntry
                    key={index}
                    todoInfo={t}
                    isThroughGoal={false}
                    type="full"
                  />
                ))
              : myTodo &&
                myTodo.map((t, index) => (
                  <TodoEntry
                    key={index}
                    todoInfo={t}
                    isThroughGoal={false}
                    type="full"
                  />
                ))}
          </s.Today>
          <s.UnfinishedTasks>
            <s.UnfinishedDescription>
              {unfinishedDescription}
            </s.UnfinishedDescription>
            {unfinishedTodo &&
              unfinishedTodo.map((u, index) => (
                <TodoEntry
                  key={index}
                  todoInfo={u}
                  isThroughGoal={false}
                  type="full"
                />
              ))}
          </s.UnfinishedTasks>
        </s.TodoListsWrapper>
      </s.TodoContentsWrapper>
    </s.TodoWrapper>
  );
}

export default Todo;
