import { useDispatch } from "react-redux";
import { s } from "./styles";
import {
  todoGetGoalList,
  todoGetMemList,
  modalAction
} from "../../../store/modal/modalSlice";
import { useParams } from "react-router";
import { useState } from "react";

function TodoBtnWrapper(props) {
  const [isSelected, setIsSelected] = useState(false);
  const params = useParams();

  const dispatch = useDispatch();

  const addInfo = {
    goals: [
      "팀빌딩",
      "아이디어 빌딩",
      "와이어프레임 작성",
      "디자인 마감",
      "해커톤"
    ],
    managers: ["이종범", "심서현", "강민주", "강희진", "신유수", "박철민"],
    duration: [
      new Date(2023, 9, 14).toISOString().split("T")[0],
      new Date(2023, 10, 14).toISOString().split("T")[0]
    ]
  };

  const openTodoMakeModal = () => {
    dispatch(
      modalAction.setShowModal({ type: "maker", title: "Todo", addInfo })
    );
    dispatch(todoGetGoalList(params.teamId));
    dispatch(todoGetMemList(params.teamId));
  };

  const ToggleBtnHandler = () => {
    setIsSelected(prev => !prev);
    props.setData(isSelected);
  };

  return (
    <s.TodoButtonsWrapper>
      <s.ToggleTodos>
        <s.ToggleTodosBtn $selected={isSelected} onClick={ToggleBtnHandler}>
          나의 Todo만 보기
        </s.ToggleTodosBtn>
      </s.ToggleTodos>
      <s.ToggleTodosModal onClick={openTodoMakeModal}>
        Todo 만들기
      </s.ToggleTodosModal>
    </s.TodoButtonsWrapper>
  );
}

export default TodoBtnWrapper;
