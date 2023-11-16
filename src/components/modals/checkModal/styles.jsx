import styled from "styled-components";

export const s = {
  InsideModal : styled.div`
    gap: 1.25rem;
    display: inline-flex;
    flex-direction: column;
  `,
  CloseBtnLine : styled.p`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    height: 1.5rem;
  `,
  CloseBtn: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 1.5rem;
  `,
  HeaderLine : styled.p`
    display: flex;
    padding-bottom: 1rem;
    align-items: center;
    gap: 0.625rem;
    color: #1E1E25;
    font-family: "Pretendard-Medium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    flex-wrap: wrap;
    justify-content: center;
  `,
  FeelingWriterDiv : styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.1875rem;
    align-self: stretch;
  `,

  FeelingWriter : styled.input`
    align-self: stretch;
    color: ${p=> p.theme.colors.gray3};
    text-align: right;
    font-family: "Pretendard-Medium";
    font-size: ${({$part}) => $part ? '1' :'0.875'}rem;
    font-style: normal;
    font-weight: ${({$part})=> $part ? '400' : '500'};
    line-height: normal;
  `,

  InputTextArea : styled.textarea`
    display: flex;
    width: 25.5625rem;
    height: ${({$todo}) => $todo ? '6.25'  : '12.25'}rem;
    padding: 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.625rem ;
    border : thin ${p=>p.theme.colors.gray0};
    background: ${p=>p.theme.colors.gray0};
    color: ${p=>p.theme.colors.gray4};
    font-family: "Pretendard-Medium";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  SubmitBtnLine :styled.p`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    align-self: stretch;
  `,
  NextBtn : styled.button`
    display: flex;
    width: 6.25rem;
    height: 2.5rem;
    padding: 0.8125rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    border: 0.7px solid ${p=> p.theme.colors.gray2};
    color: ${p=>p.theme.colors.gray2};
    font-family: "Pretendard-Medium";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  SubmitBtn : styled.button`
    display: flex;
    height: 2.5rem;
    padding: 0.8125rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex: 1 0 0;
    border-radius: 0.625rem;
    border: 1px solid ${p=> p.theme.colors.gray2};
    background: ${p=>p.theme.colors.gray2};
    color: ${p=>p.theme.colors.white};
    font-family: "Pretendard-Medium";
    font-size: ${({$todo}) => $todo ? '0.75' :'1'}rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `

}