import styled from "styled-components";

export const s = {
  BtnWrapper: styled.button`
    display: flex;
    width: 15.625rem;
    height: 15.0625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: ${p => p.theme.colors.gray3};
  `,
  BtnContent: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  `,
  BtnImage: styled.img`
    width: 1.5rem;
    height: 1.5rem;
  `,
  BtnText: styled.span`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: ${p => p.theme.colors.white};
    text-overflow: ellipsis;
    font-size: 1rem;
  `
};
