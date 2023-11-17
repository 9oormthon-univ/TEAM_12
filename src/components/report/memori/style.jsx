import styled from "styled-components";

export const MemoriPageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
`;

export const MemoriPageHeaderTitle = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: 0.625rem;
  span {
    font-family: "Pretendard-Medium";
  }
`;
export const MemoriPageHeaderSubtitle = styled.div`
  color: ${props => props.theme.colors.gray4};
  font-size: 1rem;
`;
