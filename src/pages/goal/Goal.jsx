import TeamCommonAlert from "../../components/team/teamCommon/TeamCommonAlert.jsx";
import Top from "./../../components/goalDetail/top/Top.jsx";
import { s } from "./styles";
import GoalInfo from "./../../components/goalDetail/goalInfo/GoalInfo";
import { Outlet, useParams } from 'react-router-dom'

function Goal(){

  const param = useParams();
  const DUMMY_TODOLIST = [
    {
      goalId:1,
      goalContent: "FE 개발 1차 마감",
      todoId: 1,
      todoContent: "도메인 구매하기",
      todoManager: "blue",
      isComplete: false
    },
    {
      goalId:2,
      goalContent: "FE 개발 1차 마감",
      todoId: 2,
      todoContent: "Progress 디자인 수정 반영",
      todoManager: "green",
      isComplete: false
    },
    {
      goalId:3,
      goalContent: "FE 개발 1차 마감",
      todoId: 3,
      todoContent: "TeamPage member 초대 오류 수정하기 2",
      todoManager: "blue",
      isComplete: true
    },
    {
      goalId:4,
      goalContent: "FE 개발 1차 마감",
      todoId: 4,
      todoContent: "TeamPage member 초대 오류 수정하기",
      todoManager: "green",
      isComplete: true
    }
  ];

  const [activeTab, setActiveTab] = useState("Timeline");

  const TabClickHandler = tab => {
    setActiveTab(tab);
  };

  return (
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
