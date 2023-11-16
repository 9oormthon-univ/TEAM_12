import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.25rem;
  min-height: 100vh;
`;
export const MainTitle = styled.div`
  font-size: 1.625rem;
  padding: 0.625rem 0rem;
  padding-top: 2.5rem;
`;

export const MainWrapper = styled.div`
  width: 100%;
  background-color: ${porps => porps.theme.colors.white};

  display: flex;
  justify-content: space-between;

  padding-top: 2.5rem;
`;

export const UserContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.gray1};

  div {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding-right: 0.3125rem;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const LoginContent = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.gray1};

  div {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding-right: 0.3125rem;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;
//---------- 네브바
export const MainNavWrapper = styled.div`
  width: 12.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const MainNavBtn = styled.div`
  padding: 1rem 0.625rem;
  font-size: 1rem;
  margin-bottom: 0.3125rem;

  background-color: ${props =>
    props.$isSelected ? props.theme.colors.gray0 : ""};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.gray0};
  }
`;
//---------- 네용
export const MainContentWrapper = styled.div`
  width: 50rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 2.5rem;
`;
