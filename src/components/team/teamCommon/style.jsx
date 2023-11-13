import { styled } from "styled-components";

export const s = {
  AlertWrapper: styled.div`
    display: flex;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.625rem;
    background: ${p => p.theme.colors.gray0};
  `,
  AlertText: styled.span`
    color: ${p => p.theme.colors.gray4};
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  SectionTitleWrapper: styled.div`
    display: flex;
    width: 50rem;
    padding-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    padding-bottom: 1.25rem;
  `,
  SectionTitleFrame: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  `,
  SectionTitle: styled.span`
    color: ${p => p.theme.colors.black};
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  SectionTitleLine: styled.div`
    background: ${p => p.theme.colors.gray1};
    width: 50rem;
    height: 0.0625rem;
  `
};
