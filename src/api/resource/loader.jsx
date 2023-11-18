import { redirect } from "react-router-dom";
import { API } from "../axios";

export const getTeamInfo = async ({ request, params }) => {
  // const [data, setData] = useState({});
  // params로 이 함수가 현재 실행할 곳의 params를 불러와서 팀, 프로젝트의 아이디를 알수 있음
  const [router] = Object.entries(params);
  try {
    const res = await API.get(`/api/projects/${router[1]}`);
    console.log("로더 성공");
    return res.data;
  } catch {
    console.log("로더 실패");
    return Dummy_Data;
  }
};


export const getMyTeams = async ({request,params}) => {
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  const {userId} = JSON.parse(localStorage.getItem('userInfo'));
  console.log(userId)

  // const data = JSON.stringify({userId})
  const data = {userId}

  console.log(data)

  // const res = await API.get(`/api/projects/myproject/{"userId":${userId}}`)
  console.log(res.data)

} 