import { redirect } from "react-router-dom";
import { API } from "../axios";

export const getTeamInfo = async({request,params})=>{

  //params로 이 함수가 현재 실행할 곳의 params를 불러와서 팀, 프로젝트의 아이디를 알수 있음
  // const [router] = Object.entries(params);

  // const res = await API.get(`projects/${router[1]}`);

  // if(res.status >299) alert('으악 에러다!')

  //아마 별다른 에러가 아니면 res.data에 우리가 원하는 프로젝트 단건 조회 답이 옵니다
  //그리고 이걸 쓸 팀페이지에 추가 설명 있습니다.
  // return res.data;

}
