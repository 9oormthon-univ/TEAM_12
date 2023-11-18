import { s } from "./style.jsx";

function TeamCommonCheckField({ isChecked, text, color }) {

  return (
    <s.CheckField>
      <s.ChkBox >
        {isChecked && <s.ChkBoxLabel $color={color}>✔</s.ChkBoxLabel>}
      </s.ChkBox>
      <s.CheckText>{text}</s.CheckText>
    </s.CheckField>
  );
}

export default TeamCommonCheckField;
