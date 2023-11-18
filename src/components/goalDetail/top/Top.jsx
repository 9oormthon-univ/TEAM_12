import { s } from "./style.jsx";
import TeamCommonCheckField from "./../../team/teamCommon/TeamCommonCheckField";
import moment from "moment";

function Top({ data }) {
  const chkText = "Goal 달성에 동의하기";
  let goalDday;
  let goalPercent;

  const goalDdayMaker = () => {
    const today = moment();
    const endDate = moment(data.data.endDate);
    const answer = moment.duration(endDate.diff(today, "days"));
    if (answer > 0) {
      goalDday = `D-${answer}`;
    } else if (answer === 0) {
      goalDday = `D-day`;
    } else if (answer < 0) {
      goalDday = `D+${-answer}`;
    }
  };

  const goalPercentMaker = () => {
    let falseAmount = 0;
    let trueAmount = 0;
    data.data.todoList.map(todo => {
      if (todo.isComplete === false) {
        falseAmount++;
      } else trueAmount++;
    });
    goalPercent = `${parseInt(
      (trueAmount / (falseAmount + trueAmount)) * 100
    )}%`;
  };

  goalDdayMaker();
  goalPercentMaker();

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
