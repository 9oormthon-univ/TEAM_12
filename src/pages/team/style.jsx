import { styled } from "styled-components";

export const s = {
  Team: styled.div`
    display: flex;
    width: 67.5rem;
    padding: 0rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    background: ${props => props.theme.colors.white};
  `,

  Line: styled.div`
    width: 65rem;
    height: 0.0625rem;
    background: ${props => props.theme.colors.gray1};
  `,

  TeamPageBody: styled.div`
    display: flex;
    padding: 2.5rem 0rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,

  TeamPageContent: styled.div`
    display: flex;
    width: 50rem;
    flex-direction: column;
    align-items: flex-start;
  `,

  /* ---- Memori 타이틀 ----*/

  MemoriPageHeaderWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.875rem;
  `,
  MemoriPageHeaderTitle: styled.div`
    font-size: 2rem;
    color: ${props => props.theme.colors.black};
    margin-bottom: 0.625rem;
    span {
      font-family: "Pretendard-Medium";
    }
  `,
  MemoriPageHeaderSubtitle: styled.div`
    color: ${props => props.theme.colors.gray4};
    font-size: 1rem;
  `
};
