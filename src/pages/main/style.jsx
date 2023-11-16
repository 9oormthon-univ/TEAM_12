import { styled } from "styled-components";

export const MainTitle = styled.div`
  font-size: 1.25rem;
`;

export const MainWrapper = styled.div`
  width: 100%;
  background-color: ${porps => porps.theme.colors.white};

  display: flex;
  justify-content: space-between;
`;

//---------- 네브바
export const MainNavWrapper = styled.div`
  width: 12.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const MainNavBtn = styled.div`
  padding: 0.3125rem 0.625rem;
  font-size: 1rem;
`;
//---------- 네용
export const MainContentWrapper = styled.div`
  width: 50rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 2.5rem;
`;
