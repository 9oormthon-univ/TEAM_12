import { s } from "./style.jsx";
import { useState } from "react";

function TeamCommonCheckField({ text, color }) {
  const [isChecked, setIsChecked] = useState(false);

  const CheckBoxHandler = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <s.CheckField onClick={CheckBoxHandler}>
      <s.ChkBox checked={isChecked}>
        {isChecked && <s.ChkBoxLabel $color={color}>✔</s.ChkBoxLabel>}
      </s.ChkBox>
      <s.CheckText>{text}</s.CheckText>
    </s.CheckField>
  );
}

export default TeamCommonCheckField;
