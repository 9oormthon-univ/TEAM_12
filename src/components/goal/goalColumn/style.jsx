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

  GoalWrapper : styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
    text-align: center;
  width: ${({ $width }) => $width}%;

    left: ${({ $position }) => $position}%;
    border: 1px solid ;
    border-radius: 0.625rem;
    border-color:${p => p.theme.colors.gray2};
    color:${p => p.theme.colors.gray4};
  `,

  Goal: styled.div`
    
    
    
    opacity: ${({ $progress }) => $progress}%;
    
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    
    
    background: ${p => p.theme.colors.gray3};
    z-index: 1;
  `,

  GoalInlineText: styled.div`
    width:100%;

    height:100%;
    display:flex;
  
    
    overflow: hidden;
    justify-content: center;
    text-align: center;
    text-overflow: ellipsis;

    font-size: 0.75rem;
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
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

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
