import { styled } from "styled-components";

export const s = {
    MemberWrapper : styled.div`
        display: flex;
        padding: 0.625rem;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        border-radius: 0.625rem;
        border: 2px solid ${props => props.theme.colors.gray1}    
    `,

    MemberColor : styled.div`
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.625rem;
        background: ${({$background}) => $background}
    `,

    MemberTextDiv : styled.div`
        display: flex;
        padding: 0.1875rem 0rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    `,

    MemberTextName : styled.span`
        font-color : ${props => props.theme.colors.black};
        font-family: Pretendard;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    MemberTextPart : styled.span`
        color : ${props => props.theme.colors.gray2};
        font-family: Pretendard;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,

}