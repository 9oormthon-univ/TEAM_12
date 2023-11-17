import styled from "styled-components";

export const s = {
  Content: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2.5rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  Header: styled.div`
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: ${p => p.theme.colors.black};
    font-family: "Pretendard-Medium";
    font-size: 0.75rem;
  `,
  HeaderBtnWrapper: styled.div`
    display: flex;
    width: 15rem;
    align-items: center;
    gap: 0.3125rem;
  `,
  Title: styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    color: ${p => p.theme.colors.black};
    font-family: "Pretendarad-Medium";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  CommentListDiv: styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
  `,
  CommentListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `
};
