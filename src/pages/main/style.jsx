import { styled } from "styled-components";

export const MainTitle = styled.div`
  font-size: 20px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  background-color: ${porps => porps.theme.colors.white};

  display: flex;
  justify-content: space-between;
`;

//---------- 네브바
export const MainNavWrapper = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
export const MainNavBtn = styled.div`
  padding: 5px 10px;
  font-size: 16px;
`;
//---------- 네용
export const MainContentWrapper = styled.div`
  width: 800px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 40px;
`;
