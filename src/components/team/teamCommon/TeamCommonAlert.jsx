import { s } from "./style";

function TeamCommonAlert({ icon = "❗️", content = "경고" }) {
  return (
    <s.AlertWrapper>
      <s.AlertText>
        {icon} {content}
      </s.AlertText>
    </s.AlertWrapper>
  );
}

export default TeamCommonAlert;
