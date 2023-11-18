import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import { s } from "./style";

import TeamCommonAlert from "../../team/teamCommon/TeamCommonAlert";

import CenterModal from "../../modals/centerModal/CenterModal";
import GoalScheduleContent from "./GoalScheduleContent";
import moment from "moment";

function GoalSchedule({ Date }) {
  const dispatch = useDispatch();
  const { showModal } = useSelector(s => s.modal);

  const startMoment = moment(Date.start, "YYYY-M-D");
  const endMoment = moment(Date.end, "YYYY-M-D");

  const addInfo = [startMoment, endMoment].map(
    e => e.toISOString().split("T")[0]
  );

  const showMakeGoalModal = () => {
    dispatch(
      modalAction.setShowModal({ type: "maker", title: "Goal", addInfo })
    );
  };

  return (
    <>
      {showModal && <CenterModal />}
      <TeamCommonAlert />
      <GoalScheduleContent
        startDate={Date.start}
        endDate={Date.end}
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
