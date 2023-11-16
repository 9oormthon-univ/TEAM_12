import { s } from "./style.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function TeamCommonCheckField({ text }) {
  const [isChecked, setIsChecked] = useState(false);

  const CheckBoxHandler = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <s.CheckField>
      <s.ChkBox checked={isChecked} onClick={CheckBoxHandler} />
      <s.CheckText>{text}</s.CheckText>
    </s.CheckField>
  );
}

export default TeamCommonCheckField;
