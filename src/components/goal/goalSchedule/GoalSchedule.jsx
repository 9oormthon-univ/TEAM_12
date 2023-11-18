import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { s } from "./style";

import TeamCommonAlert from "../../team/teamCommon/TeamCommonAlert";

import CenterModal from "../../modals/centerModal/CenterModal";
import GoalScheduleContent from "./GoalScheduleContent";

function GoalSchedule({ Date }) {
  const dispatch = useDispatch();
  const { showModal } = useSelector(s => s.modal);


  const showMakeGoalModal = () => {
    dispatch(
      modalAction.setShowModal({ type: "maker", title: "Goal", addInfo:[Date.start,Date.end] })
    );
  };

  return (
    <>
      {showModal && <CenterModal />}
      <TeamCommonAlert />
      <GoalScheduleContent
        Date={Date}
        type="team"
      />
      <s.AddGoalDiv>
        <s.AddGoalBtn onClick={showMakeGoalModal}>
          <s.AddGoalText>Goal 만들기</s.AddGoalText>
        </s.AddGoalBtn>
      </s.AddGoalDiv>
    </>
  );
}

export default GoalSchedule;
