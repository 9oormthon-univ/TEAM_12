import {s} from "./style";

function TeamPageHeader({name,descript}){
    return(
    <s.Total>
        <s.BtnLayout>
          <s.Btn><s.BtnFont>프로젝트 완료하기</s.BtnFont></s.Btn>
        </s.BtnLayout>
        <s.NameLayout>{name}</s.NameLayout>
        <s.Description>{descript}</s.Description>
    </s.Total>
    )
}

export default TeamPageHeader
