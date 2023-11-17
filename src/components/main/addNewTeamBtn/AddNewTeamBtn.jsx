import { useDispatch } from "react-redux";
import { s } from "./styles";
import { modalAction } from "../../../store/modal/modalSlice";
import CenterModal from "../../modals/centerModal/CenterModal";
import { useSelector } from "react-redux";

function AddNewTeamBtn() {
  const { showModal } = useSelector(s => s.modal);

  const dispatch = useDispatch();

  const showAddPrjModal = () => {
    dispatch(
      modalAction.setShowModal({ type: "project", title: "add", addInfo: {} })
    );
  };

  return (
    <>
      {showModal && <CenterModal />}
      <s.BtnWrapper onClick={showAddPrjModal}>
        <s.BtnContent>
          <s.BtnImage src="/BlackPlus.png" />
          <s.BtnText>새 프로젝트 시작하기</s.BtnText>
        </s.BtnContent>
      </s.BtnWrapper>
    </>
  );
}

export default AddNewTeamBtn;
