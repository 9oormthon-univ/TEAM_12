import TeamCommonCheckField from "./../../team/teamCommon/TeamCommonCheckField";
import { useEffect, useState } from "react";
import { theme } from "../../../style/theme.js";
import { s } from "./style.jsx";

function TodoEntry({ todoInfo: i, isThroughGoal, type }) {
  const [isChecked, setIsChecked] = useState();

  const newRoute =
    i && type === "readonly"
      ? ``
      : isThroughGoal
      ? `todoId/${i.todoId}`
      : `goalId/${i.goalId}/todoId/${i.todoId}`;

  const CheckboxClickHandler = e => {
    if (!i) return;
    if (type !== "full") {
      return;
    }
    setIsChecked(prev => !prev);
  };

  const SelectCheckField = () => {
    if (!i) return;
    if (type === "readonly") {
      return (
        <TeamCommonCheckField
          isChecked={true}
          text=""
          color={theme.memberColors[i.todoManagerMemberId]}
        />
      );
    } else if (type === "routeonly") {
      return (
        <TeamCommonCheckField
          isChecked={isChecked}
          text=""
          color={theme.memberColors[i.todoManagerId]}
        />
      );
    } else if (type === "full") {
      return (
        <TeamCommonCheckField
          isChecked={isChecked}
          text=""
          color={theme.memberColors[i.todoManagerMemberId]}
        />
      );
    }
  };

  const TypedCheckField = SelectCheckField();

  return (
    <s.TodoEntryWrapper
      to={newRoute}
      $color={theme.memberColors[i.todoManagerMemberId]}
    >
      <s.CheckFieldWrapper onClick={CheckboxClickHandler}>
        {TypedCheckField}
      </s.CheckFieldWrapper>
      <s.TodoContentsWrapper>
        <s.TodoCategory>{i.goalContent}</s.TodoCategory>
        <s.TodoTitle>{i.todoContent}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
