import { styled } from "styled-components";

export const s = {
  GoalDurationDiv: styled.div`
    display: flex;
    padding: 1.25rem 0rem 0.625rem 0rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,
  GoalDurationText: styled.span`
    color: ${p => p.theme.colors.gray2};

    font-size: 0.75rem;
  `,
  GoalList: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  AddGoalDiv: styled.div`
    display: flex;
    width: 50rem;
    padding-top: 30px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1.25rem;
  `,
  AddGoalBtn: styled.button`
    display: flex;
    padding: 0.375rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid ${p => p.theme.colors.gray2};
    background: ${p => p.theme.colors.gray2};
  `,
  AddGoalText: styled.span`
    color: ${p => p.theme.colors.white};

    font-size: 0.75rem;
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
