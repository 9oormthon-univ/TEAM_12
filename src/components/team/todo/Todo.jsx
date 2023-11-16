import { s } from "./style.jsx";
import TeamCommonAlert from "./../teamCommon/TeamCommonAlert";
import TeamCommonSectionTitle from "../teamCommon/TeamCommonSectionTitle.jsx";
import TodoEntry from "../../todoEntry/TodoEntry.jsx";
import TeamCalendar from "../../teamCalendar/teamCalendar.jsx";

function Todo({ today, unfinished }) {
  const todayTasks = today.map(t => (
    <TodoEntry key={t.id} category={t.category} title={t.title} col={t.color} />
  ));

  const unfinishedTasks = unfinished.map(u => (
    <TodoEntry key={u.id} category={u.category} title={u.title} col={u.color} />
  ));

  const selectedDate = "선택한 날짜";
  const unfinishedDescription = "아직 완료되지 않았어요";

  return (
    <s.TodoWrapper>
      <TeamCommonSectionTitle title="Todo" />
      <TeamCommonAlert />
      <s.TodoButtonsWrapper></s.TodoButtonsWrapper>
      <s.TodoContentsWrapper>
        <TeamCalendar />
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
