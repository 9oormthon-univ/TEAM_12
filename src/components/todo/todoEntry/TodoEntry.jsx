import TeamCommonCheckField from "./../../team/teamCommon/TeamCommonCheckField";
import { useEffect, useState } from "react";
import { theme } from "../../../style/theme.js";
import { s } from "./style.jsx";

function TodoEntry({ todoInfo: i, isThroughGoal, type }) {
  const [isChecked, setIsChecked] = useState();
  const [newRoute, setNewRoute] = useState("");
  const [checkField, setCheckField] = useState("");
  const [todoColor, setTodoColor] = useState("");

  useEffect(() => {
    i && setIsChecked(i.isComplete);
    setNewRoute(
      i && type === "readonly"
        ? ``
        : isThroughGoal
        ? `todoId/${i.todoId}`
        : `goalId/${i.goalId}/todoId/${i.todoId}`
    );

    setTodoColor(
      type && type === "routeonly"
        ? theme.memberColors[(i.todoManafefeagerId % 10) + 1]
        : theme.memberColors[(i.todoManagerMemberId % 10) + 1]
    );

    setCheckField(
      type === "readonly" ? (
        <TeamCommonCheckField
          isChecked={true}
          text=""
          color={theme.memberColors[(i.todoManagerMemberId % 10) + 1]}
        />
      ) : type === "routeonly" ? (
        <TeamCommonCheckField
          isChecked={i.isComplete}
          text=""
          color={theme.memberColors[(i.todoManagerId % 10) + 1]}
        />
      ) : type === "full" ? (
        <TeamCommonCheckField
          isChecked={i.isComplete}
          text=""
          color={theme.memberColors[(i.todoManagerMemberId % 10) + 1]}
        />
      ) : (
        ""
      )
    );
  }, []);

  const CheckboxClickHandler = e => {
    if (!i) return;
    if (type !== "full") {
      return;
    }
    setIsChecked(prev => !prev);
  };

  return (
    <s.TodoEntryWrapper to={newRoute} $color={todoColor}>
      <s.CheckFieldWrapper onClick={CheckboxClickHandler}>
        {i && checkField}
      </s.CheckFieldWrapper>
      <s.TodoContentsWrapper>
        <s.TodoCategory>{i && i.goalContent}</s.TodoCategory>
        <s.TodoTitle>{i && i.todoContent}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
