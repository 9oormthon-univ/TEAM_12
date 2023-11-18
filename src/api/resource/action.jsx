import { redirect } from "react-router-dom";
import { API } from "../axios";

//각 페이지 마다 다른 submit함수를 사용하기

//main에서 사용한 팀생성
export const createTeam = async({request,params}) =>{

  const datas = await request.formData();

  const toSendData ={
    mode:'NORMAL'
  }

  const keys = datas.keys();
  for (const key of keys) {
    toSendData[key] = datas.get(key)
  }


  const send = await API.post(`/api/projects`,toSendData);
  const {projectId} = send.data.data;
  const {statusCode} =  send.data;
  
  if (statusCode !== 200) alert('에러 발생!')
  

  return redirect(`teamId/${projectId}`)
}


//todo 상세 페이지에서 호출할 todo체크 (보낼때 작성 시간 보내기)


//team에서 호출할 goal todo생성 / 멤버 추가 
//완료 후 회고록 작성(data엔트리 돌려서 나오는 values가 '')인게 회고록(이것도 보낼 때 작성시간 체크)

export const createGoalTodoMem = async({request,params})=>{

  const [router] = Object.entries(params)
  const [id,param] =  router;

  const data = await request.formData();



  //요청이 memeber goal todo인지 구분하기 위해 form에 쌓인 데이터 하나를 까서 검증
  const checker = []

  for (const a of data.keys()) {
    checker.push(a)
  }

  let type;
  switch (checker[0]) {
    //goal 분기
    case 'title':
      type = 'goals';
      break;

    //todo 분기
    case 'goalId':
      type = 'todos';
      break;

    //nickname 분기
    case 'nickname':
      type = 'projects';
      break;
    
    default:
      break;
  }

  const {userId} = JSON.parse(localStorage.getItem('userInfo'))
  if (type!=='todos') data.append("userId",userId);
  

  const sendData = await 
        API.post(`/api/${type}${type !=='todos' ? `/${param}` :''}${checker[0] === 'nickname' ? '/members' : ''}`,data);
  

  return redirect(`/${id}/${param}`)
}