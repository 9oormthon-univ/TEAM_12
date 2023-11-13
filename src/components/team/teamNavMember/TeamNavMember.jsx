import {s} from "./style";

function TeamNavMember({name,part,col}){

    return(
        <s.MemberWrapper>
            <s.MemberColor $background={col}/>
            <s.MemberTextDiv>
                <s.MemberTextName>{name}</s.MemberTextName>
                <s.MemberTextPart>{part}</s.MemberTextPart>
            </s.MemberTextDiv>
        </s.MemberWrapper>
    )
}

export default TeamNavMember