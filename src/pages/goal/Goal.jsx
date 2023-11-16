import TeamCommonAlert from "../../components/team/teamCommon/TeamCommonAlert.jsx";
import Top from "./../../components/goalDetail/top/Top.jsx";
import { s } from "./styles";
import GoalInfo from "./../../components/goalDetail/goalInfo/GoalInfo";

function Goal() {
  return (
    <>
      <s.Backdrop to={".."} />
      <s.Content>
        <s.GoalPageWrapper>
          <TeamCommonAlert />
          <Top />
          <GoalInfo />
        </s.GoalPageWrapper>
      </s.Content>
    </>
  );
}

export default Goal;
