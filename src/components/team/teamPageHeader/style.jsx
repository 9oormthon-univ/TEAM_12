import {styled} from 'styled-components';

export const s = {
    Total : styled.div`
        display: flex;
        padding: 2.5rem 0rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3125rem;
        align-self: stretch;
    `,
    BtnLayout : styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-self: stretch;
    `,
    Btn : styled.button`
        display: flex;
        padding: 0.375rem 0.625rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background : ${props => props.theme.colors.gray1}
    `,
    BtnFont : styled.span`  
        color : ${props => props.theme.colors.white}

    `,
    NameLayout : styled.span`
        color: var(--black, #1E1E25);
        font-family: Pretendard;
        font-size: 1.625rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    Description : styled.span`
        align-self: stretch;
        color: ${props => props.theme.colors.gray2};
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    
}