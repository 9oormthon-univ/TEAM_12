import { useState } from "react";
import { s } from "./style.jsx";

function TodoEntry({ todoInfo: i, isThroughGoal }) {
  const [isChecked, setIsChecked] = useState(false);

  const newRoute = isThroughGoal
    ? `todoId/${i.todoId}`
    : `goalId/${i.goalId}/todoId/${i.todoId}`;

  const CheckboxClickHandler = e => {
    setIsChecked(prev => !prev);
  };

  return (
    <s.TodoEntryWrapper to={newRoute} $color={i.color ?? i.todoManager}>
      <s.CheckField onClick={CheckboxClickHandler}>
        <s.ChkBox checked={isChecked}>
          {isChecked && <s.ChkBoxLabel $color={i.color}>✔</s.ChkBoxLabel>}
        </s.ChkBox>
      </s.CheckField>
      <s.TodoContentsWrapper>
        <s.TodoCategory>{i.goalContent}</s.TodoCategory>
        <s.TodoTitle>{i.todoContent}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
