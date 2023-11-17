import styled from "styled-components";

export const s = {
  TodoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  `,
  TodoButtonsWrapper: styled.div`
    display: flex;
    width: 50rem;
    padding: 1.25rem 0rem;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1.25rem;
  `,
  TodoContentsWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,
  TodoListsWrapper: styled.div`
    display: flex;
    width: 31.875rem;
    justify-content: space-between;
    align-items: flex-start;
  `,
  Today: styled.div`
    display: flex;
    width: 15.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    flex-shrink: 0;
  `,
  TodayDate: styled.span`
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-family: "Pretendard-Medium";
    font-size: 1.25rem;
  `,
  UnfinishedTasks: styled.div`
    display: flex;
    width: 15.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    flex-shrink: 0;
  `,

  UnfinishedDescription: styled.span`
    color: ${props => props.theme.colors.black};
    text-align: center;
    font-family: "Pretendarad-Medium";
    font-size: 1.25rem;
  `
};
