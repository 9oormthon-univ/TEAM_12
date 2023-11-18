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

export const MemoriList = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;
export const MemoriWrapper = styled.div`
  width: 100%;
  display: flex;

  padding: 0.625rem;
  margin-bottom: 2.5rem;
`;

export const MemoriSideLine = styled.div`
  width: 0.25rem;
  min-height: 100%;
  background-color: ${props => props.$sidelinecolor};

  margin-right: 1.25rem;
  flex-shrink: 0;
`;

export const MemoriContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const MemoriContentName = styled.div`
  font-size: 1rem;
  margin-bottom: 0.3125rem;
`;
export const MemoriContentTime = styled.div`
  font-size: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const MemoriContentContent = styled.div`
  width: 100%;
  font-size: 0.75rem;
`;

// 폼제출

export const MemoriForm = styled.form`
  width: 100%;
  display: flex;
`;

export const MemoriInput = styled.textarea`
  flex-grow: 1;

  padding: 1.25rem;
  height: 7.5rem;

  font-size: 0.75rem;

  border-radius: 0.625rem;
  background-color: ${props => props.theme.colors.gray0};

  display: flex;
  justify-content: start;
  color: ${props => props.theme.colors.black};
  &:placeholder {
    color: ${props => props.theme.colors.gray4};
  }
`;
export const MemoriSubmit = styled.button`
  font-size: 0.75rem;
  padding: 0 2rem;
  margin-left: 0.625rem;

  flex-shrink: 0;

  border-radius: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray2};
`;
