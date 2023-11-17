import styled from "styled-components";

export const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.625rem;
  padding-top: 1.25rem;
`;

export const GuideContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray4};
  margin-bottom: 0.3125rem;
`;

export const GuideColor = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.4375rem;

  border-radius: 50%;
  border: 1px solid;
`;
