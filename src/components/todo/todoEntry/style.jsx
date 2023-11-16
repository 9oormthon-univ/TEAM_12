import { Link } from "react-router-dom";
import styled from "styled-components";

export const s = {
  TodoEntryWrapper: styled(Link)`
    display: flex;
    padding: 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.625rem;
    border: 2px solid ${({ $color }) => $color};
  `,
  TodoChkBox: styled.input.attrs({ type: "checkbox" })`
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    background: ${props => props.theme.colors.gray0};
    &:ischecked {
      background: red;
    }
  `,
  TodoContentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3125rem;
    flex: 1 0 0;
    overflow: auto;
    padding: 0.2rem;
    &::-webkit-scrollbar {
      height: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background-color: ${props => props.theme.colors.gray1};
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  `,
  TodoCategory: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.3125rem;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.gray3};
  `,
  TodoTitle: styled.span`
    overflow: hidden;
    color: ${props => props.theme.colors.black};
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Pretendarad-Medium";
    font-size: 1rem;
  `
};
