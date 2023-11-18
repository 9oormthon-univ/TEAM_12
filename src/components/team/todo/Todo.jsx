import { s } from "./style.jsx";
import TeamCommonAlert from "./../teamCommon/TeamCommonAlert";
import TeamCommonSectionTitle from "../teamCommon/TeamCommonSectionTitle.jsx";

import TeamCalendar from "../teamCalendar/TeamCalendar.jsx";
import { useEffect, useState } from "react";
import moment from "moment";

import TodoBtnWrap from "../../todo/todoBtnWrap/TodoBtnWrap.jsx";
import TodoEntry from "./../../todo/todoEntry/TodoEntry";
import { API } from "../../../api/axios.js";

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

  const [displayDate, setDisplayDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY년 M월 D일")
  );
  const [todayTodo, setTodayTodo] = useState("");
  const [unfinishedTodo, setUnfinishedTodo] = useState("");
  // todayTasks, unfinishedTasks를 위 데이터로 mapping

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
  useEffect(() => {
    fetchTodayTodoData();
  }, [displayDate]);

  useEffect(() => {
    fetchTodayTodoData();
    fetchUnfinishedData();
  }, []);

  return (
    <s.TodoWrapper>
      <TeamCommonSectionTitle title="Todo" />
      <TeamCommonAlert />
      <TodoBtnWrap />
      <s.TodoContentsWrapper>
        {/* 캘린더 */}
        <TeamCalendar $getSelectedDate={getSelectedDate} />
        {/* 캘린더 */}

        <s.TodoListsWrapper>
          <s.Today>
            <s.TodayDate>{selectedDate}</s.TodayDate>
            {todayTodo &&
              todayTodo.map((t, index) => (
                <TodoEntry key={index} todoInfo={t} isThroughGoal={false} />
              ))}
          </s.Today>
          <s.UnfinishedTasks>
            <s.UnfinishedDescription>
              {unfinishedDescription}
            </s.UnfinishedDescription>
            {unfinishedTodo &&
              unfinishedTodo.map((u, index) => (
                <TodoEntry key={index} todoInfo={u} isThroughGoal={false} />
              ))}
          </s.UnfinishedTasks>
        </s.TodoListsWrapper>
      </s.TodoContentsWrapper>
    </s.TodoWrapper>
  );
}

export default Todo;
