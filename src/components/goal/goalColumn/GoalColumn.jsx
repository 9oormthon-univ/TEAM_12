import { useRecoilState } from "recoil";
import { s } from "./style";
import { themeColor } from "../../../context/colorState";

function GoalColumn({ goal, index }) {
  const [colorInfo, setColorInfo] = useRecoilState(themeColor);

  const getColor = () => {
    const num = goal.progress;
    const colorText =
      "rgb(" +
      colorInfo[num][0] +
      "," +
      colorInfo[num][1] +
      "," +
      colorInfo[num][2] +
      ")";

    return colorText;
  };

  const lines = [10, 20, 30, 40].map(e => <s.GoalLines key={e} $left={e} />);

  return (
    <s.GoalColumn>
      {lines}
      <s.Today $left={30}>
        <s.TodayDot $rad={index === 0 ? 50 : 0} />
        <s.TodayLine $left={30} />
      </s.Today>
      <s.Goal
        $width={goal.width}
        $position={goal.position}
        to={`goalId/${goal.id}`}
        style={{
          backgroundColor: `${getColor()}`,
          borderColor: `${getColor()}`
        }}
      >
        <s.GoalInlineText>{goal.text}</s.GoalInlineText>
      </s.Goal>
    </s.GoalColumn>
  );
}

export default GoalColumn;
