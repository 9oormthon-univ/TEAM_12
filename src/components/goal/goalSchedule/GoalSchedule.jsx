import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { s } from "./style";

import TeamCommonAlert from "../../team/teamCommon/TeamCommonAlert";
import GoalColumn from "../goalColumn/GoalColumn";
import CenterModal from "../../modals/centerModal/CenterModal";
import GoalScheduleContent from "./GoalScheduleContent";

function GoalSchedule() {
  const dispatch = useDispatch();
  const { showModal } = useSelector(s => s.modal);

  const startDay = new Date(2023, 9, 14);
  const endDay = new Date(2023, 10, 14);

  const dateStringMaker = date => {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  };

  const addInfo = [startDay, endDay].map(e => e.toISOString().split("T")[0]);

  const showMakeGoalModal = () => {
    dispatch(
      modalAction.setShowModal({ type: "maker", title: "Goal", addInfo })
    );
  };

  return (
    <>
      {showModal && <CenterModal />}
      <TeamCommonAlert />
      <GoalScheduleContent />
      <s.AddGoalDiv>
        <s.AddGoalBtn onClick={showMakeGoalModal}>
          <s.AddGoalText>Goal 만들기</s.AddGoalText>
        </s.AddGoalBtn>
      </s.AddGoalDiv>
    </>
  );
}

export default GoalSchedule;
