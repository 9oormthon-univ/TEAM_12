import { useDispatch, useSelector } from 'react-redux'
import {s} from './style'
import { modalAction } from '../../../store/modal/modalSlice'
import FormLabel from '../formLabel/FormLabel';
import { Form } from 'react-router-dom';


function MakeModal(){
    const {title, addInfo ,duration ,goals,managers} = useSelector(state => state.modal);
    
    const dispatch = useDispatch();
    
    const modalTitle = title === 'Goal';


    const [ minDate , maxDate] = modalTitle ? addInfo : duration;

    const closeModal = ()=>dispatch(modalAction.setCloseModal())


    const makerTitleInput =  modalTitle ? 
        <s.FormInput 
            type='text'
            id='title' 
            name='title' 
            placeholder={'Goal의 이름을 적어주세요!'}
            required/> :
        <s.FormSelect name='goalId' id='title'>
            {goals.map((e)=>
            <s.FormOption key={e.goalId} value={e.goalId} >{e.content}</s.FormOption>)}
        </s.FormSelect>;

    const makerContentInput = 
    <s.FormInput type='text' name='content' id='content'  placeholder={modalTitle ? 
        'Goal의 목표, 공지, 첨언 등 세부사항을 적어주세요.' 
        : '이루고자하는 Todo를 적어주세요!'} required/>;

    const makerLastInput = modalTitle ?
        <s.FormInput type='date' 
                     id='endDate'
                     min={minDate}
                     max={maxDate}
                     name='endDate' 
                     pattern="\d{4}-\d{2}-\d{2}"
                     required/> :
        <s.FormSelect name='memberId' id='manager'>
            {managers.map((e) => 
                <s.FormOption key={e.id} value={e.id}>
                {e.nickname}</s.FormOption>)}
        </s.FormSelect>
    

    return(
        <Form method='post' onSubmit={closeModal}>
            <s.List>
                <s.Header>
                    <s.Title> {title} 만들기 </s.Title>
                    <s.CloseBtn onClick={closeModal}
                    src='/Close.png'/>
                </s.Header>
                {/* 제목 쓰는 곳 */}
                <s.FormList>
                    <FormLabel htmlFor='title' label={modalTitle ? 'Goal 이름' : "Goal"}/>
                    {makerTitleInput}
                </s.FormList>
                {/* 내용 쓰는 곳 */}
                <s.FormList>
                    <FormLabel htmlFor='content' label={`${title} 내용`} />
                    {makerContentInput}
                </s.FormList>
                {/* 날짜 1 */}
                <s.FormList>
                    <FormLabel 
                        htmlFor={modalTitle ? 'startDate' : 'deadLine'}
                        label={`${ modalTitle ? '시작 ' : '목표 '}날짜`}/>
                    <s.FormInput type='date' 
                        id={modalTitle ? 'startDate' : 'deadLine'}
                        min={minDate}
                        max={maxDate} 
                        name={modalTitle ? 'startDate' : 'endDate'}
                        required pattern="\d{4}-\d{2}-\d{2}"/>
                </s.FormList>
                {/* 종료일 or 담당자 */}
                <s.FormList>
                    <FormLabel 
                        htmlFor={modalTitle ? 'endDate' : 'manager'}
                        label={`${ modalTitle ? '종료날짜' : '담당자'}`} />
                    {makerLastInput}
                </s.FormList>
                <s.SubmitBtn type='submit' onSubmit={closeModal}>완료하기</s.SubmitBtn>
            </s.List>
        </Form>
    )   
}

export default MakeModal