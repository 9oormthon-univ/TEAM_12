import { useState } from "react";
import { s } from "./style";
import GoalSchedule from "../goalSchedule/GoalSchedule";

function GoalScheduleWrapper({ Date }) {
  const [showGoalSche, setShowGoalSche] = useState(true);

  const toggleGoalSchedule = () => {
    setShowGoalSche(!showGoalSche);
  };

  return (
    <s.GoalTotalWrapper>
      <s.GoalHeader>
        <s.GoalToggler>
          <s.GoalText>Goal</s.GoalText>
          <s.GoalTogglerBtn onClick={toggleGoalSchedule}>
            <s.GoalTogglerImg $scale={!showGoalSche} src="/up.png" />
          </s.GoalTogglerBtn>
        </s.GoalToggler>
        <s.GoalLine />
      </s.GoalHeader>

      {showGoalSche && <GoalSchedule Date={Date} />}
    </s.GoalTotalWrapper>
  );
}

export default GoalScheduleWrapper;
