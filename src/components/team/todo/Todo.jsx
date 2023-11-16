import { s } from "./style.jsx";
import TeamCommonAlert from "./../teamCommon/TeamCommonAlert";
import TeamCommonSectionTitle from "../teamCommon/TeamCommonSectionTitle.jsx";

import TeamCalendar from "../../teamCalendar/teamCalendar.jsx";
import { useState } from "react";
import moment from "moment";

import TodoBtnWrap from "../../todo/todoBtnWrap/TodoBtnWrap.jsx";
import TodoEntry from "./../../todo/todoEntry/TodoEntry";

function Todo({ today, unfinished }) {
  const todayTasks = today.map(t => (
    <TodoEntry key={t.id} category={t.category} title={t.title} col={t.color} />
  ));

  const unfinishedTasks = unfinished.map(u => (
    <TodoEntry key={u.id} category={u.category} title={u.title} col={u.color} />
  ));

  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY년 M월 D일")
  );
  const getSelectedDate = date => {
    setSelectedDate(moment(date).format("YYYY년 M월 D일"));
  };

  const unfinishedDescription = "아직 완료되지 않았어요";

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
