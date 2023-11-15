import { Form } from 'react-router-dom'
import {s} from  './styles'
import { useDispatch, useSelector } from 'react-redux'
import { modalAction } from '../../../store/modal/modalSlice';

function CheckModal(){
  const {title,addInfo} = useSelector(s=>s.modal)

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalAction.setCloseModal())
  };
  
  const todoCheck = title === 'todo';

  const textAreaPlaceH = todoCheck ? 'Todo 달성 소감을 남겨주세요!' :
          '프로젝트를 회고해보아요.';

  return(
    <Form method='post' onSubmit={closeModal}>
      <s.InsideModal>
        <s.CloseBtnLine>
          <s.CloseBtn onClick={closeModal}src='/Close.png'/>
        </s.CloseBtnLine>
        <s.HeaderLine>
          {todoCheck ? `${addInfo.todoName} 달성!` : '프로젝트 회고록 작성하기'}
        </s.HeaderLine>
        { !todoCheck && 
          <s.FeelingWriterDiv>
            <s.FeelingWriter readOnly
              placeholder={addInfo.writer} name={addInfo.writer} $part={true}/>
            <s.FeelingWriter readOnly
              placeholder={addInfo.part} name={addInfo.part} $part={false}/>
          </s.FeelingWriterDiv>
        }
        <s.InputTextArea placeholder={textAreaPlaceH} required 
          name='feeling'/>
        <s.SubmitBtnLine>
          { todoCheck && <s.NextBtn onClick={closeModal}>다음에 할게요</s.NextBtn>}
          <s.SubmitBtn $todo={todoCheck}>
            { todoCheck ? '기록 남기기' : '회고하기'}
          </s.SubmitBtn>
        </s.SubmitBtnLine>
      </s.InsideModal>
    </Form>
  )
}

export default CheckModal