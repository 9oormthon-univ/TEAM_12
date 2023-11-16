import styled from "styled-components";

export const s = {
  GoalInfo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 1.25rem;
  `,
  GoalTitleAndDescription: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
  `,
  Title: styled.span`
    font-size: 1.625rem;
    font-weight: 500;
    color: ${p => p.theme.colors.black};
  `,
  Description: styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: ${p => p.theme.colors.gray2};
  `,
  GoalPeriod: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.3125rem;
  `,
  Period: styled.span`
    font-size: 0.75rem;
    font-weight: 400;
    color: ${p => p.theme.colors.gray4};
  `
};
