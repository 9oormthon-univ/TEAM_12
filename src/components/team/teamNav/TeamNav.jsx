import {s} from "./style";
import TeamNavMember from "../teamNavMember/TeamNavMember";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";

function TeamNav({logo,teams}){

    const dispatch = useDispatch();

    const addMemberHandler = () =>{
        dispatch(modalAction.setShowModal({type:'project',title:'member',addInfo:{}}))
    }

    const members = teams.map(e=> 
        <TeamNavMember key={e.name} name={e.name} part={e.part} col={e.color}/>)

    return(
        <s.NavWrapper>
            <s.LogoWrapper>
                <s.Logo>{logo}</s.Logo>
            </s.LogoWrapper>
            <s.MemberListWrapper>
                <s.MemberPlusLayer>
                    <s.MemberText>Member</s.MemberText>
                    <s.MemberPlusBtn onClick={addMemberHandler}>
                        <s.PlusBtnImg src="/Plus.png"/>
                    </s.MemberPlusBtn>
                </s.MemberPlusLayer>
                <s.MemberList>
                    {members}
                </s.MemberList>
            </s.MemberListWrapper>
        </s.NavWrapper>
    )

}

export default TeamNav