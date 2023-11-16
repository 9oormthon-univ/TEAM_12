import styled from "styled-components";

export const s = {
  Content : styled.div`
    display: flex;
    padding: 1.125rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  Header : styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: ${p=>p.theme.colors.black};
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  HeaderBtnWrapper : styled.div`
    display: flex;
    width: 15rem;
    align-items: center;
    gap: 0.3125rem;
  `,
  Title : styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    color: ${p=>p.theme.colors.black};
    font-family: "Pretendarad-Medium";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  CommentListDiv : styled.div`
    display: flex;
    padding-bottom: 30vh;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
  `,
  CommentListWrapper : styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  CommentPostDiv : styled.div`
    display: flex;
    width: 28.75rem;
    align-items: flex-start;
    gap: 0.625rem;
  `,

  CommentInput : styled.input`
    display: flex;
    padding: 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    flex: 1 0 0;border-radius: 0.625rem;
    background: ${p=> p.theme.colors.gray0};
    color: ${p=>p.theme.colors.gray4};
    font-family:  "Pretendard-Medium";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,

  CommentBtn : styled.button`
    display: flex;
    padding: 0.8125rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.625rem;
    border: 1px solid ${p=>p.theme.colors.gray2};
    color: ${p=>p.theme.colors.gray2};
    font-family:  "Pretendard-Medium";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
}