import { Form, redirect } from "react-router-dom"
import { useEffect } from "react";
import {s} from "../makeModal/style"
import { useDispatch, useSelector } from "react-redux"

import { modalAction } from "../../../store/modal/modalSlice";
import FormLabel from "../formLabel/FormLabel";

function ProjectModal(){

  const dispatch = useDispatch();

  const {title,addInfo} = useSelector(s => s.modal);

  const closeModal = () => {
    dispatch(modalAction.setCloseModal());
    redirect('')
  }


  const today = new Date().toISOString().split('T')[0];

  const titleHeader = title === 'add';

  const pwPlaceHolder = '프로젝트의 입장 비밀번호를 입력해주세요';

  const titleInputName = `${titleHeader ? 'title' : 'nickname'}`;
  const introInputName = `${titleHeader ? 'description':'role'}`;

  const nameContent = <s.FormInput type="text" id="name" name={titleInputName} required
        placeholder=
        {titleHeader ? '프로젝트의 이름을 남겨주세요.':'프로젝트 내에서 사용할 닉네임을 입력해주세요.'}/>;

  const introContent = <s.FormInput type="text" id="introduce" name={introInputName}
        required placeholder={titleHeader ? '프로젝트의 소개를 해주세요.':
        '프로젝트 내에서 맡은 역할을 적어주세요.'}/>;

  const pwContent = <s.FormInput type={titleHeader ? 'text' : 'password'} id="pw"
        name="password"
        required placeholder={pwPlaceHolder} autoComplete="off"/>   
        
  // const welcomeComment = `'새 프로젝트 만들기' ${}`

  return(
    <Form method="POST" onSubmit={closeModal}>
      <s.List>
        <s.Header>
          <s.Title>
            {titleHeader ? '새 프로젝트 만들기' : '프로젝트 참여하기'}
            {addInfo.isFirst && '(첫번째)'}
          </s.Title>
          <s.CloseBtn onClick={closeModal}
            src='/Close.png'/>
        </s.Header>
        {/* 플젝 이름 or nickname */}
        <s.FormList>
          <FormLabel htmlFor={titleInputName}
            label={titleHeader ? '프로젝트 이름' : '닉네임'}/>
          {nameContent}  
        </s.FormList>

        {/* 소개 or 역할 */}
        <s.FormList>
          <FormLabel htmlFor='description' label={ titleHeader ? '프로젝트 소개':'역할'}/>
          {introContent}
        </s.FormList>

        {/* 비밀번호 */}
        <s.FormList>
          <FormLabel htmlFor='password' label='비밀번호'/>
          {pwContent}
        </s.FormList>

        {/* 프로젝트 생성만 보여줌 */}
        { titleHeader && 
        <>
          <FormLabel label='프로젝트 기간'/>
          <s.DurationDiv>
            <s.FormList>
              <FormLabel htmlFor='startDate' label='시작 일자'/>
              <s.FormInput required pattern="\d{4}-\d{2}-\d{2}"
                 type="date" 
                 id="startDate"
                 min={today}
                 name="startDate"
                 $harf={true}/>
            </s.FormList>
            <s.FormList>
              <FormLabel htmlFor='endDate' label='마감 일자'/>
              <s.FormInput required pattern="\d{4}-\d{2}-\d{2}"
                 type="date" 
                 id="endDate"
                 min={today}
                 name="endDate"
                 $harf={true}/>
            </s.FormList>
          </s.DurationDiv>
        </>
        }
        <s.SubmitBtn type='submit' onSubmit={closeModal}>참여하기</s.SubmitBtn>
      </s.List>
    </Form>
  )
}

export default ProjectModal