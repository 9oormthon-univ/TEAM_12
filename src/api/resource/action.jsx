import { redirect } from "react-router-dom";

//각 페이지 마다 다른 submit함수를 사용하기

//main에서 사용한 팀생성


//todo 상세 페이지에서 호출할 todo체크 (보낼때 작성 시간 보내기)


//team에서 호출할 goal todo생성 / 멤버 추가 
//완료 후 회고록 작성(data엔트리 돌려서 나오는 values가 '')인게 회고록(이것도 보낼 때 작성시간 체크)

export const formSubmit = async({request,params})=>{

  console.log(params)

  const isParamsEmpty = Object.keys(params).length === 0 ;

  const data = await request.formData();


  const keys = data.entries();
  for (const values of keys) {
    console.log(values)
  }
  const [router] = !isParamsEmpty ? Object.entries(params) : [];
  const [id,param] = !isParamsEmpty ? router : [];


  return redirect(isParamsEmpty ? '':`/${id}/${param}`)
}