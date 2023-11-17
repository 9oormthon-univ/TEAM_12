import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const s = {
  GoalColumn: styled.div`
    display: flex;
    width: 50rem;
    padding-right: 0px;
    align-items: center;
    height: fit-content;
  `,
  Goal: styled(Link)`
    display: flex;
    width: ${({ $width }) => $width}rem;
    position: relative;
    left: ${({ $position }) => $position}%;
    padding: 0.3125rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    border: 1px solid;

    z-index: 1;
  `,

  GoalInlineText: styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    color: ${p => p.theme.colors.white};
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  GoalLines: styled.div`
    border-left: thin solid ${p => p.theme.colors.gray1};
    height: 1.9rem;
    left: ${({ $left }) => $left}rem;
    position: relative;
  `,

  Today: styled.div`
    left: ${({ $left }) => $left}%;
    display: flex;
    position: relative;
    z-index: 10;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 0.4rem;
  `,

  TodayDot: styled.div`
    border-radius: ${({ $rad }) => $rad}%;
    width: ${({ $rad }) => ($rad === 50 ? 0.4 : 0.12)}rem;
    height: 0.4rem;
    stroke-width: 1px;
    background: ${p => p.theme.colors.black};
  `,

  TodayLine: styled.img`
    border-left: 2px solid ${p => p.theme.colors.black};
    height: 1.5rem;
  `
};
