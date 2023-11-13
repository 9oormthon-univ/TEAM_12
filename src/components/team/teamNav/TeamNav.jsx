import {s} from "./style";
import TeamNavMember from "../teamNavMember/TeamNavMember";

function TeamNav({logo,teams}){


    const addMemberHandler = () =>{
        console.log('얍!')
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