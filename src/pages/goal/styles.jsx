import { Link } from "react-router-dom";
import styled from "styled-components";

export const s = {
  Backdrop: styled(Link)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 29;
    background-color: rgba(0, 0, 0, 0.75);
  `,
  Content: styled.div`
    flex-direction: column;
    flex-shrink: 0;
    align-self: stretch;
    position: fixed;
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    background: #ffffff;
    height: 100%;
  `,
  GoalPageWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 2.5rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    flex-shrink: 0;
    align-self: stretch;
    background: ${p => p.theme.colors.white};
  `,
  NavBarWrapper: styled.nav`
    display: flex;
    padding-top: 1.5rem;
    align-items: flex-end;
    align-self: stretch;
  `,
  NavBtnWrapper: styled.ul`
    display: flex;
    flex-direction: row;
  `,
  NavBtn: styled.button`
    display: flex;
    width: 5rem;
    height: 2rem;
    border-bottom: 0.2rem solid
      ${props =>
        props.selected ? props.theme.colors.black : props.theme.colors.gray1};
    flex-direction: column;
    vertical-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props =>
      props.selected
        ? `color: ${props.theme.colors.black}`
        : `color: ${props.theme.colors.gray1}`}
  `,
  NavLine: styled.div`
    width: 100%;
    height: 0.2rem;
    background: ${p => p.theme.colors.gray1};
  `,
  ViewWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
  `
};
