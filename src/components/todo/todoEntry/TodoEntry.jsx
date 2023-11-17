import { s } from "./style.jsx";

function TodoEntry({ todoInfo : i }) {
  return (
    <s.TodoEntryWrapper
      to={`goalId/${i.goalId}/todoId/${i.todoId}`}
      $color={i.color ?? i.todoManager}
    >
      <s.TodoChkBox />
      <s.TodoContentsWrapper>
        <s.TodoCategory>{i.goalContent}</s.TodoCategory>
        <s.TodoTitle>{i.todoContent}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
