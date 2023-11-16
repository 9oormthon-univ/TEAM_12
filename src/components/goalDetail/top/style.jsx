import styled from "styled-components";

export const s = {
  Top: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,
  GoalAgree: styled.div`
    display: flex;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
  `,
  GoalProgress: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.3125rem;
  `,
  ProgressTxt: styled.span`
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
    color: ${p => p.theme.colors.black};
  `,
  ProgressLine: styled.span`
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
    color: ${p => p.theme.colors.gray2};
  `
};
