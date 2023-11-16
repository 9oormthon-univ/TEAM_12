import TeamCommonAlert from "../../components/team/teamCommon/TeamCommonAlert.jsx";
import Top from "./../../components/goalDetail/top/Top.jsx";
import { s } from "./styles";
import GoalInfo from "./../../components/goalDetail/goalInfo/GoalInfo";
import { Outlet, useParams } from 'react-router-dom'

function Goal(){

  const param = useParams();

  return(
    <>
      <s.Backdrop to={".."} />
      <s.Content>
      { !param.todoId && 
        <s.GoalPageWrapper>
          <TeamCommonAlert />
          <Top />
          <GoalInfo />
        </s.GoalPageWrapper> }
        <main>
          <Outlet/>
        </main>
      </s.Content>
    </>
  );
}

export default Goal;
