import { styled } from "styled-components";

export const s = {
    Team : styled.div`
        display: flex;
        width: 67.5rem;
        padding: 0rem 1.25rem;
        flex-direction: column;
        align-items: flex-start;
        background : ${props => props.theme.colors.white}
    `,

    Line : styled.div`
        width: 65rem;
        height: 0.0625rem;
        background : ${props => props.theme.colors.gray1}
    `,
    
    TeamPageBody : styled.div`
        display: flex;
        padding: 2.5rem 0rem;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    `,

    TeamPageContent : styled.div`
        display: flex;
        width: 50rem;
        flex-direction: column;
        align-items: flex-start;
    `,
}