import { s } from "./style.jsx";
import TeamCommonCheckField from "./../../team/teamCommon/TeamCommonCheckField";

function Top() {
  const chkText = "Goal 달성에 동의하기";
  const goalDday = "D-13";
  const goalPercent = "100%";

  return (
    <s.Top>
      <s.GoalAgree>
        <TeamCommonCheckField text={chkText} />
      </s.GoalAgree>
      <s.GoalProgress>
        <s.ProgressTxt>{goalDday}</s.ProgressTxt>
        <s.ProgressLine>|</s.ProgressLine>
        <s.ProgressTxt>{goalPercent}</s.ProgressTxt>
      </s.GoalProgress>
    </s.Top>
  );
}

export default Top;
