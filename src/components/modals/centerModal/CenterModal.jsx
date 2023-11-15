import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import MakeModal from "../makeModal/MakeModal";
import { s } from "./style";
import ProjectModal from "../projectModal/ProjectModal";

function CenterModal() {
  const dispatch = useDispatch();
  const { type } = useSelector(store => store.modal);

  let content;
  const closer = { type: "", title: "" };

  switch (type) {
    case "maker":
      content = <MakeModal />;
      break;

    case "project":
      content = <ProjectModal />;

    default:
      break;
  }

    return(
      <>
        <s.Backdrop onClick={()=>dispatch(modalAction.setCloseModal(closer))}/>
          <s.ModalContent>
              {content}
          </s.ModalContent>
      </>
    )
}

export default CenterModal;
