import { s } from "./style.jsx";

function TodoEntry({ todoInfo: i, isThroughGoal }) {
  const newRoute = isThroughGoal
    ? `todoId/${i.todoId}`
    : `goalId/${i.goalId}/todoId/${i.todoId}`;

  return (
    <s.TodoEntryWrapper to={newRoute} $color={i.color ?? i.todoManager}>
      <s.TodoChkBox />
      <s.TodoContentsWrapper>
        <s.TodoCategory>{i.goalContent}</s.TodoCategory>
        <s.TodoTitle>{i.todoContent}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
