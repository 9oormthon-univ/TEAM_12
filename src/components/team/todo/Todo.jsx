import { s } from "./style.jsx";
import TeamCommonAlert from "./../teamCommon/TeamCommonAlert";
import TeamCommonSectionTitle from "../teamCommon/TeamCommonSectionTitle.jsx";

import TeamCalendar from "../teamCalendar/TeamCalendar.jsx";
import { useEffect, useState } from "react";
import moment from "moment";

import TodoBtnWrap from "../../todo/todoBtnWrap/TodoBtnWrap.jsx";
import TodoEntry from "./../../todo/todoEntry/TodoEntry";
import { API } from "../../../api/axios.js";

function Todo({ today, unfinished }) {
  const todayTasks = today.map(t => (
    <TodoEntry key={t.todoId} todoInfo={t} isThroughGoal={false} />
  ));

  const unfinishedTasks = unfinished.map(u => (
    <TodoEntry key={u.todoId} todoInfo={u} isThroughGoal={false} />
  ));

  const [displayDate, setDisplayDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY년 M월 D일")
  );
  const [todayTodo, setTodayTodo] = useState([]);
  const [unfinishedTodo, setUnfinishedTodo] = useState([]);
  // todayTasks, unfinishedTasks를 위 데이터로 mapping

  const getSelectedDate = date => {
    setSelectedDate(moment(date).format("YYYY년 M월 D일"));
    setDisplayDate(moment(date).format("YYYY-M-D"));
  };

  const unfinishedDescription = "아직 완료되지 않았어요";

  const fetchTodayTodoData = async () => {
    try {
      const response = await API.get(`api/todos?date=${displayDate}`);
      setTodayTodo(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  const fetchUnfinishedData = async () => {
    try {
      const response = await API.get(`api/todos/incomplete`);
      setUnfinishedTodo(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  useEffect(() => {
    fetchTodayTodoData();
  }, [displayDate]);

  useEffect(() => {
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
            {todayTasks}
          </s.Today>
          <s.UnfinishedTasks>
            <s.UnfinishedDescription>
              {unfinishedDescription}
            </s.UnfinishedDescription>
            {unfinishedTasks}
          </s.UnfinishedTasks>
        </s.TodoListsWrapper>
      </s.TodoContentsWrapper>
    </s.TodoWrapper>
  );
}

export default Todo;
