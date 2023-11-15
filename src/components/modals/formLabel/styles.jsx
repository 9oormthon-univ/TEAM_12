import { styled } from "styled-components";

export const s = {
  FormLabel: styled.label`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
  `,

  FormLabelP: styled.span`
    color: ${p => p.theme.colors.gray4};

    font-size: 0.875rem;
  `
};
