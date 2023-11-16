import styled from "styled-components";

export const s = {
  TodoButtonsWrapper: styled.div`
    display: flex;
    width: 50rem;
    padding: 1.25rem 0rem;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1.25rem;
  `,
  ToggleTodos: styled.div`
    display: flex;
    align-items: flex-start;
    gap: -0.0625rem;
  `,
  ToggleTodosBtn: styled.button`
    display: flex;
    padding: 0.375rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: ${({ $rad }) =>
      $rad ? "0.3125rem 0rem 0rem 0.3125rem" : "0rem 0.3125rem 0.3125rem 0rem"};
    border: 1px solid ${p => p.theme.colors.gray2};
    color: ${p => p.theme.colors.gray2};

    font-size: 0.75rem;
  `,
  ToggleTodosModal: styled.button`
    display: flex;
    padding: 0.375rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid ${p => p.theme.colors.gray2};
    background: ${p => p.theme.colors.gray2};
    color: ${p => p.theme.colors.white};

    font-size: 0.75rem;
  `
};
