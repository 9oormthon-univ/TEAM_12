import { styled } from "styled-components";

export const s = {
  GoalTotalWrapper: styled.div`
    display: flex;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
  `,
  GoalHeader: styled.div`
    display: flex;
    width: 50rem;
    padding-bottom: 1.125rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  `,
  GoalToggler: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,
  GoalText: styled.span`
    color: ${p => p.theme.colors.black};

    font-size: 1.125rem;
  `,
  GoalTogglerBtn: styled.button`
    display: flex;
    align-items: flex-start;
  `,
  GoalTogglerImg: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    transform: scaleY(${({ $scale }) => ($scale ? "-1" : "1")});
  `,
  GoalLine: styled.div`
    width: 50rem;
    height: 0.0625rem;
    background: ${p => p.theme.colors.gray1};
  `
};
